import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getManagerTeam, getLeagueCupStatus } from "~/server/services/fpl";

export const fplRouter = createTRPCRouter({
  getManagerById: publicProcedure
    .input(z.number())
    .query(async ({ input }) => getManagerTeam(input)),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      // const pnbh2h = await get(
      //   "https://fantasy.premierleague.com/api/leagues-h2h-matches/league/175750/?page=1&event=10",
      // );
      const test = await getLeagueCupStatus(175726);
      // console.log("TEST!", test);

      // const playersId: string[] = pnbh2h.results.reduce((acc, curr) => {
      //   acc.push(curr.entry_1_entry, curr.entry_2_entry);
      //   return acc;
      // }, []);

      // const promises = [];
      // const promisesWithSquad = [];

      // for (let i = 0; i < playersId.length; i++) {
      //   // const url = `https://fantasy.premierleague.com/api/entry/${playersId[i]}`;
      //   const urlForPicks = `https://fantasy.premierleague.com/api/entry/1862164/event/10/picks/`;
      //   // Full url: https://fantasy.premierleague.com/api/element-summary/{element_id}/
      //   // make an HTTP request for each URL
      //   // const promise = get(url);
      //   const promise2 = get(urlForPicks);
      //   // add the promise to the promises array
      //   // promises.push(promise);
      //   promisesWithSquad.push(promise2);
      // }

      // wait for all the promises in the promises array to resolve
      // const allPlayers = await Promise.all(promises);
      // const allPicks = await Promise.all(promisesWithSquad);

      // for (let i = 0; i < playersId.length; i++) {
      //   for (let i = 0; i < allPicks.picks.length; i++) {
      //     const promiseEl = get(urlForPicks);

      //   }
      // }

      // const managerElements =
      //fantasy.premierleague.com/api/my-team/937050/
      // console.log("allPicks", allPicks);
      https: return {
        greeting: `Hello ${input.text}`,
        test,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
