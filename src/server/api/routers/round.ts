import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const RoundRouter = createTRPCRouter({
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.round.findFirst();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.round.findMany({
      orderBy: { date: "asc" },
    });
  }),
});
