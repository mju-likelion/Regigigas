import { App } from "@slack/bolt";

// Listens to incoming messages that contain "hello"
function anonymousBot(app: App) {
    app.message('test', async ({ message, say }) => {
        // say() sends a message to the channel where the event was triggered
        await say(`Hey there <@${message.user}>!`);
    });
};

export default anonymousBot;