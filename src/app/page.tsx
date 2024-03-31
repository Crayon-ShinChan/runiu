import { Calculator } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import Container from "@/components/ui/container";
import { api } from "@/trpc/server";
import CRSChart from "../components/stats/crs-chart";

export default async function Home() {
  const roundData = await api.round.getAll();

  return (
    <Container>
      <main>
        <CRSChart roundData={roundData} />
        <div className="px-5 pb-8">
          <HelpfulLinks />
        </div>
      </main>
    </Container>
  );
}

function HelpfulLinks() {
  return (
    <>
      <h2 className="mt-4 pb-3 font-semibold text-zinc-900">Helpful Links</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          leftSection={
            <Image src="/maple.svg" alt="maple" height={16} width={16} />
          }
        >
          <Link
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/works.html"
            target="_blank"
          >
            How Express Entry works
          </Link>
        </Button>
        <Button leftSection={<Calculator size={16} />}>
          <Link href="https://www.lptoronto.com/calc/" target="_blank">
            Calculate your CRS score
          </Link>
        </Button>
        <Button
          leftSection={
            <Image src="/github-mark.svg" alt="github" height={16} width={16} />
          }
        >
          <Link href="https://github.com/Crayon-ShinChan/runiu" target="_blank">
            Contact or contribute to Runiu
          </Link>
        </Button>
      </div>
    </>
  );
}
