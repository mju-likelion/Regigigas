import { App } from '@slack/bolt';

const teamMaching = (app: App) => {
  app.message(/팀매칭/, async ({ message, say }) => {
    // @ts-expect-error
    const { text } = message;
    const textArr = text.split('');
    await say(`${text}`);
    // eslint-disable-next-line no-console
    console.log(textArr);
  });
};

export default teamMaching;
