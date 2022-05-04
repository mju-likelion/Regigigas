import { App } from '@slack/bolt';
import schedule from 'node-schedule';
import sqlite3 from 'sqlite3';

// 현재 날짜 받아오기 (월, 일)
const today = new Date();
const month: number = today.getMonth() + 1;
const date: number = today.getDate();

//생일 사람의 이름을 저장할 배열
const birthPerson: string[] = [];

// 매일 13시마다 데이터와 날짜를 비교해 생일자가 있는지 찾기
const scheduler = schedule.scheduleJob('0 0 13 * * *', async function () {
  //db불러오기 
  const db = new sqlite3.Database('birthday.db');
  db.all(
    `SELECT * FROM birthday WHERE birthmonth == ${month} and 
    birthdate == ${date}`,
    (err, rows) => {
      rows.forEach((row: string) => {
        birthPerson.push(row.name);
      });
    },
  );
  db.close();
});

// 생일인 데이터가 있으면 메시지 보내기
function birthday(app: App) {
  
}
// say(`오늘은 <@${이름 data}>님 생일입니다. 생일을 축하드립니다. 어쩌고 :이모티콘:`);


export default birthday;
