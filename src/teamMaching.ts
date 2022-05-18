/* eslint-disable no-plusplus */
import { App } from '@slack/bolt';

const randomTeamIndex = (from: number = 0, to: number = 5): number =>
  Math.floor(Math.random() * to + from);

const randomPartition = (teams: number, players: string) => {
  let playerIdx = 0;
  let maxTeamSize = Math.floor(players.length / teams);
  let breakPoint = 0;

  // 팀에 사람을 넣기 위한 2차원 배열 선언 (ES6)
  // eslint-disable-next-line no-array-constructor
  const team = Array.from(Array(teams), () => new Array());

  // 균등하게 팀 배분하기
  while (playerIdx < teams * maxTeamSize) {
    const teamIdx = randomTeamIndex(0, teams);
    // 팀에 넣을 수 있다면 사람 넣기
    if (team[teamIdx].length < maxTeamSize) {
      team[teamIdx].push(players[playerIdx]);
      playerIdx += 1;
    }

    // 예기치 못한 무한반복 탈출
    if (breakPoint > 100) break;
    breakPoint += 1;
  }

  // 남는 사람 배치, 남는 사람들을 넣기 위해 maxTeamSize + 1
  maxTeamSize += 1;
  while (playerIdx < players.length) {
    const teamIdx = randomTeamIndex(0, teams);
    if (team[teamIdx].length < maxTeamSize) {
      team[teamIdx].push(players[playerIdx]);
      playerIdx += 1;
    }
    if (breakPoint > 100) break;
    breakPoint += 1;
  }

  return team;
};

const teamMaching = (app: App) => {
  app.message(/자비스 팀매칭/, async ({ message, say }) => {
    // @ts-expect-error
    const { text } = message;

    // 명령어와 팀, 플레이어를 구분
    const teamData = text.split(' ');
    const numberOfTeams = Number(teamData[2]);
    const numberOfPlayers = teamData.splice(3);

    if (numberOfTeams <= numberOfPlayers.length && numberOfPlayers.length <= 100) {
      // 조건에 맞다면 팀 나누기 기능 실행
      const dividedTeams = randomPartition(numberOfTeams, numberOfPlayers);
      // 팀 배열을 원하는 문자 스타일로 매핑
      const teamList = dividedTeams.map((item, idx) => `${idx + 1}조: ${item}\n`).join('');
      await say(`제가 열심히 짜봤어요 :blush:\n${teamList} 어때요? 마음에 드시나요? ༼ つ ◕_◕ ༽つ`);
    } else {
      const errorMessage = `[팀 매칭 에러!] 다음을 확인해주세요. 팀 수 <= 팀 인원 / 팀 인원 <= 100 / '자비스 팀매칭 (팀 수) 사람1 사람2 사람3'`;
      await say(`${errorMessage}`);
    }
  });
};

export default teamMaching;
