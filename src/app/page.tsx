import { api } from "@/trpc/server";
import TestChart from "./test-chart";

export default async function Home() {
  const latest = await api.round.getLatest();

  return (
    <main>
      {latest?.type}
      <TestChart />
      {/* <TestChart />
      <TestChart />
      <TestChart /> */}
    </main>
  );
}
