import { App } from "@slack/bolt";

    function introduce(app: App) {
        app.message('자비스!', async ({ say }) => {
            await say(`왜불러`);
            // 랜덤 응답 - "전 좀 쉬어야겠어요."
        });

        app.message('안녕 자비스', async ({ message, say }) => {
        // say() se–nds a message to the channel where the event was triggered
        await say({
            blocks: [
            {
                "type": "section",
                "text": {
                "type": "mrkdwn",
                // @ts-expect-error
                "text": `안녕하세요 <@${message.user}>! 저는 아이언맨의 인공지능 비서, 자비스입니다.`,
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

    // jarvis 기능 리스트 추가하기
    app.action('button_click', async ({ ack, say }) => {
        // Acknowledge the action
        await ack();
        await say(`자비스를 통해 익명으로 채널에 게시할 수 있습니다!`);
    });
}

export default introduce;