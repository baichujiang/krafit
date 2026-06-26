import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KRAFIT",
    short_name: "KRAFIT",
    description: "Training equipment for focused home workouts.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFAF6",
    theme_color: "#FBFAF6",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
