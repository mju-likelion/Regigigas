/* eslint-disable import/extensions */
import { App } from '@slack/bolt';

import gangnam from './lunchList/gangnam.json';
import yongin from './lunchList/yongin.json';

const lunchMenu = (app: App) => {
  app.message(/강남 뭐 먹지/, async ({ say }) => {
    if (gangnam === null) {
      await say(`오늘은 굶으셔야겠는데요... :musktard:`);
    } else {
      const pickedGangnam = Math.floor(Math.random() * gangnam.length);
      const gangnamRestaurant = gangnam[pickedGangnam] || [];
      await say(
        `오늘 점심은 ${gangnamRestaurant.gangnamName} 어때요? ${gangnamRestaurant.gangnamUrl}`,
      );
    }
  });
  app.message(/용인 뭐 먹지/, async ({ say }) => {
    if (yongin === null) {
      await say(`오늘은 굶으셔야겠는데요... :musktard:`);
    } else {
      const pickedYongin = Math.floor(Math.random() * yongin.length);
      const yonginRestaurant = yongin[pickedYongin] || [];
      await say(`오늘 점심은 ${yonginRestaurant.yonginName} 어때요? ${yonginRestaurant.yonginUrl}`);
    }
  });
};

export default lunchMenu;
