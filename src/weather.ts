import { App } from '@slack/bolt';
import fetch from 'cross-fetch';

const today = new Date();
const hours: number = today.getHours();
const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=37.225004&lon=127.187690&appid=3a3faad2ff8d32bd5b413c9dbdc82048';

function weather(app: App) {
  // 현재 학교 날씨
  app.message('날씨', async ({ message, say }) => {
    await say({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `창문 밖을 보면 알 수 있잖아요;;`,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: '현재 학교날씨',
            },
            action_id: 'button_click_1',
          },
        },
      ],
      // @ts-expect-error
      text: `Hey there <@${message.user}>!`,
    });
  });

  // 버튼 클릭
  app.action('button_click_1', async ({ ack, say }) => {
    await ack();
    // 날씨 api 찌르기 - fetch
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.weather));
    // 응답
    await say(`학교날씨는 ${today}`);
  });
}

export default weather;
