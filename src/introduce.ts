import { App } from "@slack/bolt";

    function introduce(app: App) {
        app.message('hello parrot', async ({ message, say }) => {
        // say() sends a message to the channel where the event was triggered
        await say({
            blocks: [
            {
                "type": "section",
                "text": {
                "type": "mrkdwn",
                // @ts-expect-error
                "text": `oh hello <@${message.user}>!`,
                },
                "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Click Me",
                },
                "action_id": "button_click", // This will act as a unique identifier for the button so your app can specify what action it wants to respond to.
                },
            },
            ],
            // @ts-expect-error
            text: `Hey there <@${message.user}>!`,
        });
    });

    // parrot 기능 리스트 추가하기
    app.action('button_click', async ({ body, ack, say }) => {
        // Acknowledge the action
        await ack();
        await say(`<@${body.user.id}> 안녕! , parrot의 기능은`);
    });
}

export default introduce;