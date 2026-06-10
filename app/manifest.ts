import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KRAFIT",
    short_name: "KRAFIT",
    description: "Training equipment for focused home workouts.",
    start_url: "/en",
    display: "standalone",
    background_color: "#101214",
    theme_color: "#101214",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
