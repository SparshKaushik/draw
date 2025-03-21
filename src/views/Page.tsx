import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Loader from "@/components/Loader";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import { NonDeletedExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import { getDrawData, setDrawData } from "@/db/draw";
import { drawDataStore } from "@/stores/drawDataStore"; // Adjust the import path as needed
import { queryClient } from "@/main";
import { useNavigate } from "@tanstack/react-router";

type PageProps = {
  id: string;
};

export default function Page({ id }: PageProps) {
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);
  const [name, setName] = useState("");
  const { theme } = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["page", id],
    queryFn: () => getDrawData(id),
  });

  const mutation = useMutation({
    mutationFn: (data: {
      elements: NonDeletedExcalidrawElement[];
      name: string;
    }) => setDrawData(id, data.elements, data.name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["page", id] });
      toast("Your page has been saved to the server!");
    },
    onError: (error: Error) => {
      toast("An error occurred while saving to the server", {
        description: error.message,
      });
    },
  });

  async function updateScene() {
    if (data?.data && excalidrawAPI) {
      const elements = data.data[0].page_elements.elements;
      excalidrawAPI.updateScene({
        elements: elements,
        appState: { viewBackgroundColor: "transparent" },
      });
      setName(data.data[0].name);
      toast("Scene updated");
    }
    if (data?.error) {
      toast("An error occurred", { description: data.error.message });
    }
  }

  async function setSceneData() {
    if (excalidrawAPI) {
      const scene = excalidrawAPI.getSceneElements();
      const updatedAt = new Date().toISOString();

      // Save locally first
      drawDataStore.getState().setPageData(id, scene, updatedAt, name);
      toast("Your page has been saved locally!");

      // Then push to API
      mutation.mutate({
        elements: scene as NonDeletedExcalidrawElement[],
        name,
      });
    }
  }

  useEffect(() => {
    if (!isLoading && data?.data && excalidrawAPI) {
      setTimeout(updateScene, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data, excalidrawAPI]);

  useEffect(() => {
    // Load data from local storage if available
    const localData = drawDataStore.getState().getPageData(id);
    if (localData && excalidrawAPI) {
      excalidrawAPI.updateScene({
        elements: localData.elements,
        appState: { viewBackgroundColor: "transparent" },
      });
      setName(localData.name);
      toast("Loaded data from local storage");
    }
  }, [id, excalidrawAPI]);

  return (
    <div className="flex w-full flex-col">
      <div className="h-full w-full">
        {isLoading ? (
          <Loader />
        ) : (
          <Excalidraw
            excalidrawAPI={(api) => setExcalidrawAPI(api)}
            renderTopRightUI={() => (
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => navigate({ to: "/pages" })}
                >
                  <ArrowLeft className="size-5" />
                </Button>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-40"
                />
                <Button variant="secondary" onClick={setSceneData}>
                  Save
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={updateScene}
                      >
                        <RefreshCcw className="size-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Refreshes the page. This removes any unsaved changes.
                        Use with caution.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
            theme={theme === "dark" ? "dark" : "light"}
            autoFocus
          >
            <WelcomeScreen />
          </Excalidraw>
        )}
      </div>
    </div>
  );
}
