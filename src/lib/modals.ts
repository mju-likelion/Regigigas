import { App } from "@slack/bolt";

    function modals(app: App) {
      app.message('모달', async ({ message, say }) => {
        // @ts-expect-error
        await say(`<@${message.user.id}>  `);
      });

      // anonymous.ts 수정
      // app.command('/모달버전', async ({ command , say }) => {
      //     // 모달 액션 넣기
      //     modals(app);
      //     // 테스트
      //     await say(`텍스트는 : ${command.text}`);
      // });
    }
        

export default modals;