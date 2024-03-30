import { Provider as JotaiProvider } from "jotai";
import { MantineProvider } from "@mantine/core";
import { TRPCReactProvider } from "@/trpc/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <JotaiProvider>
        <MantineProvider>{children}</MantineProvider>
      </JotaiProvider>
    </TRPCReactProvider>
  );
}
