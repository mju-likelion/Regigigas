import { App } from '@slack/bolt';
import dotenv from 'dotenv';

// 여기에 각자 파일 import 해와주세요.(알파벳 순으로)
import anonymous from './anonymous';
import introduce from './introduce';
import lunchMenu from './lunchMenu';
import randomNumber from './randomNumber';

dotenv.config();
const port = Number(process.env.PORT) || 3000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

// 여기 아래와 같은 형식으로 본인꺼 추가해주세요.
anonymous(app);
introduce(app);
randomNumber(app);
lunchMenu(app);

(async () => {
  await app.start(port);
})();
