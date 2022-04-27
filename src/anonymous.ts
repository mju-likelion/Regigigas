import { App } from "@slack/bolt";

  function anonymous(app: App) {
    // 채널에 익명으로 게시
    app.command('/자비스', async ({ command , say }) => {
        await say(`${command.text}`);
    });
  }

export default anonymous;