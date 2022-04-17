import { App } from "@slack/bolt";
import dotenv from "dotenv";

// import anonymousBot from "./ anonymousBot";

dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

// anonymousBot(app);

app.message('hi parrot', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  // @ts-expect-error
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  await app.start(port);
  console.log("⚡️ Bolt app is running!  ");
})();