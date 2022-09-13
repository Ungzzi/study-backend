const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(cookieParser('abcde')); // 암호화
app.use(session({
    secret: '1234', //암호화할 문자열
    resave: false,
    saveUninitialized: true
    // httpOnly:,
    // secure: true,
    // cookie
}));


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/session", (req, res) => {
    req.session.key1 = "value1";
    console.log(req.session);
    res.render("session");
})

app.get("/logout", (req, res) => {
    req.session.destroy(function () {
        res.redirect("/login");
    })
})


app.get("/get", (req, res) => {
    if ((req.query.cookie) == true) {
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

// app.get("/get", (req, res) => {
//     res.send(req.signedCookies);
// })

app.listen(port, () => {
    console.log("server open:", port);
})