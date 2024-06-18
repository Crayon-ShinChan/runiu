import HelpfulLinks from "@/components/helpful-links";
import CRSChart from "@/components/stats/crs-chart";
import DistributionChart from "@/components/stats/distribution-chart";
import Container from "@/components/ui/container";
import { api } from "@/trpc/server";

export default async function Home() {
  const roundData = await api.round.getAll();

  return (
    <Container>
      <main className="pb-8">
        <CRSChart roundData={roundData} />
        <DistributionChart roundData={roundData} />
        <HelpfulLinks />
      </main>
    </Container>
  );
}
