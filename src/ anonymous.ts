import { App } from "@slack/bolt";

import modals from "./lib/modals";


    function anonymous(app: App) {
        // 메세지 익명으로 응답
        app.command('/자비스', async ({ command , say }) => {
            await say(`${command.text}`);
        });

        // 모달 띄워서 메세지 입력 후 익명으로 응답
        app.command('/모달버전', async ({ ack, body, client }) => {
            // Acknowledge the command request
            await ack();

            modals(app);
          
            try {
              // Call views.open with the built-in client
              await client.views.open({
                // Pass a valid trigger_id within 3 seconds of receiving it
                trigger_id: body.trigger_id,
                // View payload
                view: {
                  type: 'modal',
                  // View identifier
                  callback_id: 'view_1',
                  title: {
                    type: 'plain_text',
                    text: '자비스가 대신 보내드립니다',
                  },
                  blocks: [
                    {
                      type: 'input',
                      block_id: 'input_c',
                      label: {
                        type: 'plain_text',
                        text: '익명으로 보낼 말 : 말하기 전에 생각했나요 ?',
                      },
                      element: {
                        type: 'plain_text_input',
                        // action_id: 'dreamy_input',
                        multiline: true,
                      },
                    },
                  ],
                  submit: {
                    type: 'plain_text',
                    text: '제출',
                  },
                },
              });
            }
            catch (error) {
              console.error(error);
            }
            // 여기 마지막
        });

    }

export default anonymous;