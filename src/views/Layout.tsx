import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "@tanstack/react-router";

export default function Layout() {
  const location = useLocation();

  const isPage = location.pathname.startsWith("/page/");

  return (
    <div className={cn("flex h-full w-full flex-col", !isPage && "p-1")}>
      {!isPage && <Navbar />}
      <div className={cn("h-full w-full", !isPage && "p-3 pt-1")}>
        <div className="flex h-full flex-row justify-center gap-8 rounded-xl border-2 border-white bg-gray-200/60 px-3 py-2 dark:border-black dark:bg-gray-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
