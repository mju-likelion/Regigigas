import { App } from "@slack/bolt";
import dotenv from "dotenv";

import introduce from "./introduce";
import randomNumber from "./randomNumber";
import jarvisCalling from "./jarvisCalling";

dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

introduce(app);
randomNumber(app);
jarvisCalling(app);

(async () => {
  await app.start(port);
})();
