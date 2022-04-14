import { App } from "@slack/bolt";
import dotenv from "dotenv";
import express from "express";

import anonymousBot from "./ anonymousBot";
// import addBirthdayEvents from "./slack/addBirthdayEvents";

express();
dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

// anonymousBot(app);
// addBirthdayEvents(app);

console.log("0");
// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  await app.start(port);
  console.log("⚡️ Bolt app is running!");
})();