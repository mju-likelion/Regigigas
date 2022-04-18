import { App } from "@slack/bolt";

// import modals from "./lib/modals";


    function anonymous(app: App) {
        app.message('anony', async ({ message, say }) => {
            // @ts-expect-error
            await say(`${message.text}`);
        });
    }

export default anonymous;