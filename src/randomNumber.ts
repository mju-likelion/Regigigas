import { App } from '@slack/bolt';

const randomValue = (from: number = 0, to: number = 101): number =>
  Math.floor(Math.random() * to + from);

const reactionRange = (dice: number): string => {
  if (dice >= 1 && dice <= 30) return 'bad';
  if (dice >= 31 && dice <= 50) return 'notbad';
  if (dice >= 51 && dice <= 70) return 'normal';
  if (dice >= 71 && dice <= 90) return 'great';
  if (dice >= 91 && dice <= 100) return 'excellent';
  return 'reactionRange error: 1~100 까지의 수만 표현합니다';
};

const reactionEvents = [
  {
    id: 'bad',
    text: [
      '어이쿠 손이 미끄러졌네 :coskmos:',
      '제 잘못 아니에요 :musuktard:',
      '제가 해도 이것보단 잘 나오겠네요 :zzzzzz:',
    ],
  },
  {
    id: 'notbad',
    text: ['뭐..네 :nodnod:', '아깝네요 :crying:', '재도전 합시다 우리 :eyes:'],
  },
  {
    id: 'normal',
    text: [
      '이정도면 잘 나온거죠 :smile:',
      '재도전 하시겠어요? :thinking__face:',
      '평범하네요 :meow_code:',
    ],
  },
  {
    id: 'great',
    text: [
      '오늘 좀 치는 날인가요? :eeee:',
      '꽤나 높은 점수에요! :fb_wow:',
      '제 덕분인거 알죠? :sunglasses:',
    ],
  },
  {
    id: 'excellent',
    text: [
      '오늘 로또 각이에요 :daebak:',
      '미쳤다 :crazy:',
      '잘했죠? 빨리 칭찬해주세요 :meow_dundundun:',
    ],
  },
];

const reaction = (dice: number): string => {
  const actionType = reactionRange(dice);
  const actionEvent = randomValue(0, 3);
  const activeEvent = reactionEvents.find(item => item.id === actionType);
  return activeEvent?.text[actionEvent] || 'reaction error';
};

const randomNunber = (app: App) => {
  app.message('자비스 던져', async ({ message, say }) => {
    const diceValues = randomValue();
    let answer: string = '';

    if (diceValues === 0) {
      answer = `명령을 거부합니다 :saygoodbye: :나: :가:`;
    } else if (diceValues === 100) {
      // @ts-expect-error
      answer = `킹갓제네럴마제스틱 <@${message.user}> :meow_wow: [${diceValues}]`;
    } else answer = `${reaction(diceValues)} [${diceValues}]`;
    await say(answer);
  });
};

export default randomNunber;
