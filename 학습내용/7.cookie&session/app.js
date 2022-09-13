const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(cookieParser('abcde')); // 암호화

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/get", (req, res) => {
    if (req.query.cookie == "true") {
        console.log("t");
        res.cookie('test_cookie', '1', {
            maxAge: 1000000, //ms 단위(10초)
            path: "/"
            // expires:    , // gmt 시간 설정
            // path: "/", // localhost:8000/~~~
            // secure: true // https 에서만 동작
            // httpOnly: true // document.cookie 를 스크립트에서 조작 불가
        })
    }
    res.send("쿠키 생성!");
})

app.get("/login", (req, res) => {
    res.render("login");
})


var info = { id: "a", pw: "1" }

app.post("/login", (req, res) => {
    if (req.body.id == info.id && req.body.pw == info.pw) {
        req.session.user = info.id;
        res.send("성공");
    } else {
        res.send("실패");
    }
})

app.get("/profile", (req, res) => {
    if (req.session.user != undefined) {
        res.render("profile");
    } else {
        res.redirect("login");
    }
})
// app.get("/get", (req, res) => {
//     res.send(req.signedCookies);
// })

app.listen(port, () => {
    console.log("server open:", port);
})