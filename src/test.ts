import { App } from "@slack/bolt";
import dotenv from "dotenv";
// import express from "express";

import anonymousBot from "./ anonymousBot";
// import addBirthdayEvents from "./slack/addBirthdayEvents";

// express();
dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

anonymousBot(app);
// addBirthdayEvents(app);

// // Listens to incoming messages that contain "hello"
// app.message('qwer', async ({ message, say }) => {
//   // say() sends a message to the channel where the event was triggered
//   await say({
//     blocks: [
//       {
//         "type": "section",
//         "text": {
//           "type": "mrkdwn",
//           "text": `Hey there <@${message.user}>!`,
//         },
//         "accessory": {
//           "type": "button",
//           "text": {
//             "type": "plain_text",
//             "text": "Click Me",
//           },
//           "action_id": "button_click", // This will act as a unique identifier for the button so your app can specify what action it wants to respond to.
//         },
//       },
//     ],
//     text: `Hey there <@${message.user}>!`,
//   });
// });

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

(async () => {
  await app.start(port);
  console.log("⚡️ Bolt app is running! ");
})();