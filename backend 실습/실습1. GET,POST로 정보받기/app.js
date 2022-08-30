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

// POST 사용을 위한 선언
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("practice1");
})

app.get("/get", (req, res) => {
    console.log(req.query);
    // res.send("get 요청");
    res.render("practice1-1", {
        name: req.query.name
    });
})

app.post("/post", (req, res) => {
    console.log(req.body);
    res.render("practic1-2", {
        name: req.body.name,
        gender: req.body.gender
    });
})

// server open
app.listen(port, () => {
    console.log("server open:", port);
})