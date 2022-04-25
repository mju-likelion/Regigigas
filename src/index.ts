import { App } from "@slack/bolt";
import dotenv from "dotenv";

import introduce from "./introduce";

dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

introduce(app);

(async () => {
  await app.start(port);
})();