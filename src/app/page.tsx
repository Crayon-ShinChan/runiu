import { api } from "@/trpc/server";
import TestChart from "./test-chart";

export default async function Home() {
  // const hello = await api.ee.hello({ text: "world" });
  const latest = await api.ee.getLatest();

  // console.log("hello", hello);
  // console.log("latest", latest);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {latest?.type}
      <TestChart />
    </main>
  );
}
