import { App } from "@slack/bolt";

function anonymousBot(app: App) {
  app.message("익명봇", async ({ say }) => {
    await say("제발요제발");
  });
};

export default anonymousBot;