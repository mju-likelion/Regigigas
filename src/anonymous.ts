import { App } from '@slack/bolt';

function anonymous(app: App) {
  app.command('/자비스', async ({ command, ack, logger, say }) => {
    try {
      await say(`${command.text}`);
      await ack();
    } catch (e) {
      logger.error(e);
      await ack();
    }
  });
}

export default anonymous;
