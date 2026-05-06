"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import type { Locale } from "@/lib/messages";

export function DocumentLang() {
  const pathname = usePathname();
  useEffect(() => {
    const seg = pathname.split("/").filter(Boolean)[0];
    const lang: Locale = seg === "de" ? "de" : "en";
    document.documentElement.lang = lang;
  }, [pathname]);
  return null;
}
