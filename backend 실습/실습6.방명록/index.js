// express 인스턴스 생성 및 app에 저장
const express = require("express");
const app = express();

// 8000번 포트로 지정
const port = 8000;

// 화면 엔진은 ejs로 설정한다.
app.set("view engine", "ejs");

// Express에서 정적파일 제공
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
// const router = require("./routes/index"); 자동으로 routes 폴더 내부의 파일을 불러옴
app.use('/', router);

app.listen(port, () => {
    console.log("server open", port);
})