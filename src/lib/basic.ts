import { App } from '@slack/bolt';

function basic(app: App) {
  app.message('parrot basic', async ({ message, say }) => {
    // @ts-expect-error
    await say(`<@${message.user.id}>  `);
  });
}

export default basic;
