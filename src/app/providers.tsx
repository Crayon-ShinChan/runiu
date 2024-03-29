import { MantineProvider } from "@mantine/core";
import { TRPCReactProvider } from "@/trpc/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <MantineProvider>{children}</MantineProvider>
    </TRPCReactProvider>
  );
}
