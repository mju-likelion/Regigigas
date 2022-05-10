import { App } from '@slack/bolt';

function weather(app: App) {
  app.message('자비스 날씨', async ({ message, say }) => {
    // say() se–nds a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `그 정도는 직접 찾아보세요`,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '현재 학교날씨',
            },
            action_id: 'button_click',
          },
        },
      ],
      // @ts-expect-error
      text: `Hey there <@${message.user}>!`,
    });
  });

  // 버튼 클릭
  app.action('button_click', async ({ ack, say }) => {
    // Acknowledge the action
    await ack();
    await say(`학교날씨`);
  });
}

export default weather;
