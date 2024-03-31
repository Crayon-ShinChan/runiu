import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const RoundRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.round.findMany({
      orderBy: { date: "asc" },
    });
  }),
});
