import { getBaseUrl } from "@/lib/utils";

export default async function sitemap() {
  return [
    {
      url: getBaseUrl(),
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
