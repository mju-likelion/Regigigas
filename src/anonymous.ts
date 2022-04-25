import { App } from "@slack/bolt";

  function anonymous(app: App) {
    // 채널에 익명으로 게시
    // app.command('/자비스', async ({ command , say }) => {
    //     await say(`${command.text}`);
    // });

    // 디엠 익명으로 보내기
    app.command('/디엠자비스', async ({ client, command, say }) => {
      // 사용자 지정, @사용자에게 보내기
      await client.chat.postMessage({
        channel: command.channel_id,
        text: command.text,
      });
      // 마지막
      await say(`${command.text}`);
      await say(`${command.channel_id}`);
      await say(`@${command.user_id}`);
      await say(`@${command.user}`);
    });
  }

export default anonymous;

// client.chat_postMessage(channel=user, blocks=blocks, text=msg)
// [{"type": "section", "text": {"type": "plain_text", "text": "Hello world"}}]