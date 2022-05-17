import { App } from '@slack/bolt';
import dotenv from 'dotenv';

// 여기에 각자 파일 import 해와주세요.(알파벳 순으로)
import anonymous from './anonymous';
import birthday from './birthday';
import introduce from './introduce';
import jarvisCalling from './jarvisCalling';
import lunchMenu from './lunchMenu';
import randomNumber from './randomNumber';
import teamMaching from './teamMaching';
import weatherApi from './weather';

dotenv.config();
const port = 3000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

// 여기 아래와 같은 형식으로 본인꺼 추가해주세요.
anonymous(app);
birthday(app);
introduce(app);
jarvisCalling(app);
lunchMenu(app);
randomNumber(app);
weatherApi(app);
teamMaching(app);

(async () => {
  await app.start(port);
})();
