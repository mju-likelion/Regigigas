import { App } from '@slack/bolt';

function introduce(app: App) {
  app.message('자비스!', async ({ say }) => {
    await say(`왜불러`);
    // 추가 구현 - 랜덤 응답
  });

  app.message('안녕 자비스', async ({ message, say }) => {
    // say() se–nds a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            // @ts-expect-error
            text: `안녕하세요 <@${message.user}>! 저는 아이언맨의 인공지능 비서, 자비스입니다.`,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '기능보기',
            },
            action_id: 'button_click', // This will act as a unique identifier for the button so your app can specify what action it wants to respond to.
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
    await say(
      `익명 봇 메시지, 주사위 게임, 예정(생일 축하 알림, 자비스 부르기, 점심 메뉴 추천, 날씨보기, 사다리타기 등)`,
    );
  });
}

export default introduce;
