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
    res.render("main");
})

// 1-1 GET
app.get("/get", (req, res) => {
    console.log(req.query);
    // res.send("get 요청");
    res.render("main-1", {
        name: req.query.name
    });
})

// 1-2 POST
app.post("/post", (req, res) => {
    console.log(req.body);
    res.render("main-2", {
        name: req.body.name,
        gender: req.body.gender
    });
})

// 2-1 AJAX GET
app.get("/get/ajax", (req, res) => {
    console.log(req.query);
    var data = {
        name: req.query.name
    }
    res.send(data);
})

// 2-2 AJAX POST
app.post("/post/ajax", (req, res) => {
    console.log(req.body);
    var data = {
        name: req.body.name,
        gender: req.body.gender,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        hobby: req.body.hobby
    }
    res.send(data);
})


// 3-1 AXIOS GET
app.get("/get/axios", (req, res) => {
    var data = {
        name: req.query.name,
        gender: req.query.gender
    }
    res.send(data);
})

// 3-2 AXIOS POST
app.post("/post/axios", (req, res) => {
    var data = {
        name: req.body.name,
        gender: req.body.gender
    }
    res.send(data);
})


// 4-1 FETCH GET
app.get("/get/fetch", (req, res) => {
    var data = {
        name: req.query.name,
        gender: req.query.gender
    }
    res.send(data);
})


// 4-2 FETCH POST
app.post("/post/fetch", (req, res) => {
    var data = {
        name: req.body.name,
        gender: req.body.gender
    }
    res.send(data);
})

// server open
app.listen(port, () => {
    console.log("server open:", port);
})