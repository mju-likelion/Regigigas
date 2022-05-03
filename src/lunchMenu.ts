import { App } from '@slack/bolt';
import gangnam from './gangnam.json';
import yongin from './yongin.json';

const lunchMenu = (app: App) => {
  app.message('강남 뭐 먹지', async ({ say }) => {
    const pickedGangnam = Math.floor(Math.random() * gangnam.length);
    const gangnamRestaurant = gangnam[pickedGangnam] || [];
    await say(`오늘 점심은 ${gangnamRestaurant.gangnamName} 어때요? /n ${gangnamRestaurant.gangnamUrl}`);
  });
  app.message('용인 뭐 먹지', async ({ say }) => {
    const pickedYongin = Math.floor(Math.random() * yongin.length);
    const yonginRestaurant = yongin[pickedYongin] || [];
    await say(`오늘 점심은 ${yonginRestaurant.yonginName} 어때요? /n ${yonginRestaurant.yonginUrl}`);
  });
};

export default lunchMenu;
