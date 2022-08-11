// express 인스턴스 생성 및 app에 저장
const express = require("express");
const app = express();

// 8000번 포트로 지정
const port = 8000;

// 화면 엔진은 ejs로 설정한다.
app.set("view engine", "ejs");

// Express에서 정적파일 제공
// 방법 1. app.use(express.static('static'));
// 방법 2. app.use('/public', express.static('static'));
app.use('/static', express.static('static'));

// localhost:8000 - test파일 렌더링
app.get("/", (req, res) => {
    var person = [
        { name: "정지웅", gender: "남자" },
        { name: "신짱구", gender: "남자" },
        { name: "흰둥이", gender: "수컷" }
    ]
    res.render("test", { per: person });
})

// localhost:8000/test - test1 파일 렌더링
app.get("/test", (req, res) => {
    res.render("test1");
})

// server open
app.listen(port, () => {
    console.log("server open:", port);
})