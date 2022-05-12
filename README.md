## 🤖 Ironman - Jarvis 🤖
```
Jarvis는 멋쟁이사자처럼 명지대 10기 슬랙봇입니다.

개발 기간: 22.04.04 ~ 22.05.11
```

## 🎮 주요 기능 🎮
- [x] 익명 봇 메시지
- [x] 주사위 게임
- [x] 자비스 기능 보기
- [x] 생일 축하 알림
- [x] 자비스 부르기
- [x] 점심 메뉴 추천

### 익명 봇 메시지

> `/자비스 <보낼 내용>` 명령어로 채널에 익명 메시지를 전송할 수 있습니다

<div>
<img width="408" alt="image" src="https://user-images.githubusercontent.com/78525973/165677517-fa0caf8e-0b35-4eb0-9e7f-bcb39b430186.png">
<img width="361" alt="image" src="https://user-images.githubusercontent.com/78525973/165677748-7416f97a-356f-4484-ba41-05230b36a901.png">
<img width="229" alt="image" src="https://user-images.githubusercontent.com/78525973/165677497-b561de85-0441-4544-b89e-cf1970074183.png">
</div>



### 주사위 게임

>`자비스 던져` 명령어를 통해 0 ~ 100 까지 숫자 중 랜덤한 값을 멘트와 함께 출력합니다.

![캡처](https://user-images.githubusercontent.com/63037629/165541884-848558d8-356e-4a72-9c0b-62305e880590.PNG)



### 자비스 기능 보기
<img width="857" alt="image" src="https://user-images.githubusercontent.com/78525973/165677268-2f60a01d-cad7-453e-8549-a143c4c551b6.png">

### 점심 메뉴 추천

> `강남 뭐 먹지` / `용인 뭐 먹지` 명령어를 통해 랜덤 맛집 추천과 링크를 함께 제공해줍니다.

![image](https://user-images.githubusercontent.com/69390311/168101863-ca4950d6-4d9b-424f-8185-180d911e76bf.png)


## 🛠 Tech Stack 🛠
- Node.js
- Bolt
- Typescript

## 💬 Convention 💬

### Branch naming convetion
|헤더|설명|
|------|---|
|master|실제 서비스를 배포 중인 브랜치입니다.|
|hotfix|서비스 중 발생한 문제를 빠르게 수정하기 위한 브랜치입니다.|
|develop|개발이 이루어지고 있는 브렌치입니다.|
|feature|develop에서 분기하며, 각 기능을 개발하는 브랜치입니다.|

### Git commit convention
|헤더|설명|
|------|---|
|feat|기능 개발|
|fix|기능 및 코드 수정|
|refactor|리팩터링|
|chor|패키지 설치, 변수명 변경과 같이 기능에 영향을 끼치지 않는 작업|
|docs|주석 추가 및 삭제, README 작성 등|

</br>

## 📁 폴더구조 📁
```markdown
.
├── src                   # has all the integrations, features
│   ├── anonymous.ts      # 자비스 익명메세지
│   ├── introduce.ts      # 자비스 소개
│   ├── randomNumber.ts   # 랜덤 주사위
│   ├── 
│   ├── 
│   └── index.ts          # starts and configures the application
│
│
└── .github/workflow      # github actions
│   ├── typecheck.yml     # typescript type check
│   └── auto.yml          # automatic
│    
├── .swcrc                # swc config
├── .eslintrc.            # ESLint config
├── package.json
├──    .db                # SQLite3
├── README.md
└── tsconfig.json         # TypeScript config
```

## 👨‍💻 팀원 소개 👨‍💻

Jarvis를 개발한 팀원을 소개합니다🤗

|이름|강민정|김수정|박민철|박소연|배한조|
|:---:|:------:|:---:|:------:|:---:|:------:|
|photo|<img src="https://user-images.githubusercontent.com/61998801/168015143-d8158e58-fa76-4c4c-b0ab-db149ca46e63.jpeg" width="130" height="130">|<img src="https://user-images.githubusercontent.com/61998801/168015272-3c398d49-54f2-468c-a6f7-0acc50757be8.jpeg" width="120" height="140">|<img src="https://user-images.githubusercontent.com/61998801/168015479-a0b29e78-033c-4316-a98b-71115b8209e5.jpg" width="130" height="130">|<img src="https://user-images.githubusercontent.com/61998801/168014279-235d838d-31f5-4331-9973-835ed76f45e0.jpg"  width="130" height="130">|<img src="https://user-images.githubusercontent.com/61998801/168015671-7c8394f1-dc52-4f4d-ad91-5128dc81bdbe.jpg" width="130" height="130">|
|Github|[ypd06021](https://github.com/ypd06021)|[JJongsKim](https://github.com/JJongsKim)|[Low-ProFiles](https://github.com/Low-ProFiles)|[qkrthdus605](https://github.com/qkrthdus605)|[Bhanjo](https://github.com/Bhanjo)|
|역할|익명메시지, <br/>자비스 기능 보기|자비스 부르기|점심 메뉴 추천|생일 축하 알림|주사위 게임|



