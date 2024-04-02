import HelpfulLinks from "@/components/helpful-links";
import Container from "@/components/ui/container";
import { api } from "@/trpc/server";
import CRSChart from "../components/stats/crs-chart";

export default async function Home() {
  const roundData = await api.round.getAll();

  return (
    <Container>
      <main className="pb-8">
        <CRSChart roundData={roundData} />
        <HelpfulLinks />
      </main>
    </Container>
  );
}
