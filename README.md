## Draw

Draw is a wrapper around Excalidraw, integrated with Supabase to save and sync your drawings seamlessly across different devices. It allows you to use Excalidraw anywhere while keeping your data available everywhere.

### Features

- **Excalidraw Integration:** Leverages the functionality of Excalidraw, a popular web-based drawing tool.
- **Supabase Backend:** Uses Supabase for authentication and storage, ensuring secure access and synchronization of your drawings.
- **Cross-Platform Sync:** Access your drawings from any device by securely saving them to your Supabase database.

### Acknowledgments

- [Excalidraw](https://excalidraw.com/) for providing the best open-source drawing tool. This wouldn't be possible without them (literally).
- [Supabase](https://supabase.com/) for their backend services.
- [shadcn/ui](https://ui.shadcn.com/) for allowing me to build super fast with the help of their UI components and blocks.

### Getting Started

### Usage

- **Sign Up or Log In:** Use the authentication flow provided by Supabase to sign up or log in.
- **Create and Edit Drawings:** Use the Excalidraw interface to create or edit drawings.
- **Save Drawings:** Drawings are automatically saved to your Supabase database.
- **Access Anywhere:** Log in from any device to access and sync your drawings.

### Deployment

To deploy the app, you can use platforms like Vercel or Netlify.
We have set up a one-click deploy to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/macintushar/draw)

If you'd like to build the app yourself, run:

    bun run build

Deploy to other hosting providers by following their specific deployment instructions.

### Tech Stack / Libraries

- Vite (React)
- Tailwind CSS with shadcn/ui
- Tanstack Query and Router
- Excalidraw
- Day.js
- Zod
- Bun

and many others.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue to discuss what you would like to change.

1.  Fork the repository
2.  Create your feature branch
3.  Commit your changes
4.  Push to the branch
5.  Open a pull request

### Development

#### Prerequisites

- [Bun](https://bun.sh)
- [Supabase Account and Project](https://supabase.com/)

#### Installation

Clone the repository:

    git clone https://github.com/macintushar/draw.git
    cd draw

Install dependencies:

    bun install

Set up your environment variables:

Create a `.env` file in the root directory and add your Supabase credentials:

    cp .env.example .env

Run the development server:

    bun run dev

Your app will be available at <http://localhost:5173>.

### License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/macintushar/draw/blob/main/LICENCE) file for more details.

### Contact

If you have any questions or suggestions, feel free to reach out!
