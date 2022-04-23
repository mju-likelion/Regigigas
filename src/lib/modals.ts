import { App } from "@slack/bolt";

    function modals(app: App) {

        app.action('morning_button', async ({ ack }) => {});

        slackApp.action("morning_button", async ({ body, ack, say, client }) => {
            await ack();
            try {
              const result = await client.views.open({
                trigger_id: body.trigger_id,
                view: {
                  type: "modal",
                  callback_id: "morning_modal",
                  title: {
                    type: "plain_text",
                    text: "미라클 모닝 챌린지",
                  },
                  blocks: [
                    {
                      type: "section",
                      text: {
                        type: "mrkdwn",
                        text: "오늘의 문제.",
                      },
                    },
                    {
                      type: "input",
                      block_id: "question",
                      label: {
                        type: "plain_text",
                        text: "1 + 1 = ?",
                      },
                      element: {
                        type: "plain_text_input",
                        action_id: "answer",
                      },
                    },
                  ],
                  submit: {
                    type: "plain_text",
                    text: "Submit",
                  },
                },
              });
              console.log(result);
            } catch (error) {
              console.error(error);
            }
        });

        // Listen for a slash command invocation
        app.command('/modals', async ({ ack, body, client, logger }) => {
            // Acknowledge the command request
            await ack();

            try {
                // Call views.open with the built-in client
                const result = await client.views.open({
                    // Pass a valid trigger_id within 3 seconds of receiving it
                    trigger_id: body.trigger_id,
                    // View payload
                    view: {
                        type: 'modal',
                        // View identifier
                        callback_id: 'view_1',
                        title: {
                            type: 'plain_text',
                            text: 'Modal title',
                        },
                        blocks: [
                            {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: 'Welcome to a modal with _blocks_'
                            },
                            accessory: {
                                type: 'button',
                                text: {
                                type: 'plain_text',
                                text: 'Click me!',
                                },
                                action_id: 'button_abc',
                            }
                            },
                            {
                            type: 'input',
                            block_id: 'input_c',
                            label: {
                                type: 'plain_text',
                                text: 'What are your hopes and dreams?'
                            },
                            element: {
                                type: 'plain_text_input',
                                action_id: 'dreamy_input',
                                multiline: true
                            },
                            },
                        ],
                        submit: {
                            type: 'plain_text',
                            text: 'Submit',
                        },
                    },
                });
                logger.info(result);
            }
            catch (error) {
                logger.error(error);
            }
        });
    }
        

export default modals;
