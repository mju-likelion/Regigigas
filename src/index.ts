import { App, AwsLambdaReceiver } from "@slack/bolt";
import { AwsCallback, AwsEvent } from "@slack/bolt/dist/receivers/AwsLambdaReceiver";
import dotenv from "dotenv";

// 여기에 각자 파일 import 해와주세요.(알파벳 순으로)
import anonymous from "./anonymous";
import introduce from "./introduce";

dotenv.config();
// Initialize your custom receiver  // 타입 지정 (!) - undefind 아님 //기본값 주기
if (!process.env.SLACK_SIGNING_SECRET) {
  throw Error("some error")
}
const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Initializes your app with your bot token and the AWS Lambda ready receiver
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,

  // When using the AwsLambdaReceiver, processBeforeResponse can be omitted.
  // If you use other Receivers, such as ExpressReceiver for OAuth flow support
  // then processBeforeResponse: true is required. This option will defer sending back
  // the acknowledgement until after your handler has run to ensure your function
  // isn't terminated early by responding to the HTTP request that triggered it.

  // processBeforeResponse: true
});


// 여기 아래와 같은 형식으로 본인꺼 추가해주세요.
introduce(app);
anonymous(app);


export const handler = async (event: AwsEvent, context: any, callback: AwsCallback) => {
  const handle = await awsLambdaReceiver.start();
  return handle (event, context, callback);
}

console.log("RUN");
