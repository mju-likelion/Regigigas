import { App } from "@slack/bolt";

// import modals from "./lib/modals";


    function anonymous(app: App) {
        // 메세지 그대로 응답
        app.message('anony1', async ({ message, say }) => {
            // @ts-expect-error
            await say(`${message.text}`);
        });
        // 메세지 익명으로 응답
        app.message('anony2', async ({ message, say }) => {
            // @ts-expect-error
            await say(`${message.text}`);
        });
    }

export default anonymous;