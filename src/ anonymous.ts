import { App } from "@slack/bolt";

// import modals from "./lib/modals";


    function anonymous(app: App) {
        // 메세지 익명으로 응답
        app.command('/자비스', async ({ command , say }) => {
            await say(`${command.text}`);
        });
    }

export default anonymous;