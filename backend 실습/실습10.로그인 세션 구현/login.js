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
    res.render("main");
})
app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/logincheck", (req, res) => {
    console.log(req.session.user);
    if (req.session.user != undefined) {
        res.redirect("/profile");
    } else {
        res.redirect("/login");
    }
})

app.get("/profile", (req, res) => {
    var data = {
        id: info.id
    }
    res.render("profile", { data: data });
})

var info = { id: "a", pw: "1" }

app.post("/logincheck", (req, res) => {
    if (req.body.id == info.id && req.body.pw == info.pw) {
        req.session.user = info.id;
        res.redirect("/profile");
    } else {
        res.send(false);
    }
})

app.post("/logout", (req, res) => {
    delete req.session.user;
    res.redirect("/");
})

app.listen(port, () => {
    console.log("server open:", port);
})