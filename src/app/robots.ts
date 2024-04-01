import type { MetadataRoute } from "next";
import { env } from "@/env";
import { getBaseUrl } from "@/lib/utils";

const baseUrl = env.NEXT_PUBLIC_SITE_URL ?? getBaseUrl();
const disallowList = ["/_next/", "/api/", "/public/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: disallowList,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
