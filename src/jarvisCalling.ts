import { App } from '@slack/bolt';

const today = new Date();
const hours: number = today.getHours();
let jarvisAnswer: string = '';

// 자비스 시간 계산기
const jarvisTime = (h: number): string => {
  if (h >= 0 && h <= 6) {
    return '새벽 코딩하셔야죠 :가보자고:';
  }
  if (h >= 7 && h <= 11) {
    return '일어나자마자 하는 코딩은 사고력 향상에 도움이 됩니다 :아하:';
  }
  if (h >= 12 && h <= 14) {
    return '점심 먹으면서 코딩하기 딱 좋네요 :샌드위치:';
  }
  if (h >= 15 && h <= 19) {
    return '오후 코딩 달리셔야죠 :gogoo:';
  }
  if (h >= 20 && h <= 23) {
    return '밤샘코딩 하러가야죠? :fire_gabojago:';
  }
  return '몇 시인지 모르겠네요 재부팅해주세요 :loading:';
};

// 자비스 뭐하지 답변
const jarvisDoing = (r: number): string => {
  if (r === 0) return '얼른 책상 앞에 앉으시죠';
  if (r === 1) return '잠시 쉬는 시간을 갖는건 어떠신가요?';
  if (r === 2) return '일단 배부터 채우고 일을 시작하죠.';
  return '잘못된 입력입니다!';
};

const jarvisCalling = (app: App) => {
  // "자비스"로 끝나는 명령어에만 반응하기
  app.message(/자비스$/, async ({ message, say }) => {
    await say({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            // @ts-expect-error
            text: `<@${message.user}>! 말씀하세요`,
          },
        },
      ],
    });
  });

  app.message(/자비스 울어/, async ({ say }) => {
    await say('우는 법은 모르지만, 흉내는 내볼게요 :cool_crying:\r이렇게 하면 되나요?');
  });

  app.message(/자비스 몇 시야/, async ({ say }) => {
    jarvisAnswer = jarvisTime(hours);
    await say(`${hours}시 입니다. ${jarvisAnswer}`);
  });

  app.message('자비스 뭐할까?', async ({ say }) => {
    const randomNum: number = Math.floor(Math.random() * 3);
    jarvisAnswer = jarvisDoing(randomNum);
    await say(`${jarvisAnswer}`);
  });
};

export default jarvisCalling;
