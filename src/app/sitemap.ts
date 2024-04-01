import { env } from "@/env";
import { getBaseUrl } from "@/lib/utils";

const baseUrl = env.NEXT_PUBLIC_SITE_URL ?? getBaseUrl();

export default async function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
