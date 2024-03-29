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
        <Button>Click me</Button>
      </main>
    </Container>
  );
}
