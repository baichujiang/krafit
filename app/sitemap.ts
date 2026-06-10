import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/en", priority: 1 },
    { path: "/de", priority: 1 },
    { path: "/en/imprint", priority: 0.3 },
    { path: "/de/imprint", priority: 0.3 },
    { path: "/en/privacy", priority: 0.3 },
    { path: "/de/privacy", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/en" || path === "/de" ? "monthly" : "yearly",
    priority,
  }));
}
