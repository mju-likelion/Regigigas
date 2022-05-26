import { App } from '@slack/bolt';
import sqlite3 from 'sqlite3';

interface Birthday {
  name: string;
  month: number;
  day: number;
}
async function getBirthdays(): Promise<Birthday[]> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('birthday.db');

    db.all(
      `SELECT * FROM birthday WHERE month == ${new Date().getMonth() + 1} or month == ${
        new Date().getMonth() + 2
      }`,
      (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      },
    );
    db.close();
  });
}
function birthday(app: App) {
  app.message(/!!!!!!!!HAPPY BIRTHDAY!!!!!!!!/, async ({ message, client, say }) => {
    try {
      const birthdays = await getBirthdays();
      birthdays.map(async b => {
        await client.chat.scheduleMessage({
          channel: message.channel,
          post_at: new Date(2022, b.month - 1, b.day, 14, 0).getTime() / 1000,
          text: `${b.name}님 생일을 축하드립니다 :birth::birth2::birth_bomb::birth_loopy::birth_party:`,
        });
      });
      await say(`위의 명령어는 치지 말아주세요:meow_wow::help-vibrate:`);
    } catch (e) {
      await say('DB에 문제가 있습니다.');
      console.error(e);
    }
  });
}
export default birthday;
