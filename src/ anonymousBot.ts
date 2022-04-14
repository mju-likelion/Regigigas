import { App } from "@slack/bolt";

// // Listens to incoming messages that contain "hello"
// app.message('hello', async ({ message, say }) => {
//   // say() sends a message to the channel where the event was triggered
//   await say(`Hey there <@${message.user}>!`);
// });

// function anonymousBot(app: App) {
//   app.message('hello', async ({ message, say }) => {
//     // console.log("흑");
//     // say() sends a message to the channel where the event was triggered
//     await say("제발요 ㅠ");
//   });
// };

// function anonymousBot(app: App) {
//   app.message("익명봇", async ({ say }) => {
//     console.log("asdf");
//     await say("제발요제발");
//   });
// };

export default anonymousBot;