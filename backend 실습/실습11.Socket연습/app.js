const express = require("express");
const app = express();
var http = require("http").Server(app); //express 로 만든 서버를 http와 연결
var io = require("socket.io")(http);
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
})

io.on("connection", function (socket) {
    console.log("Server Socket Connected");
    socket.on('msg', function (data) {
        console.log(data);
    })
    // socket.emit('msg', `${socket.id} 연결 되었습니다.`);

    // socket.on('msg', function (data) {
    //     console.log(socket.id, data);

    //     socket.emit('msg', `Server : "${data}" 받았습니다.`)
    // });

    // io.emit('msg', `${socket.id} 연결 되었습니다.`);  // 모두에게 전송
});

http.listen(port, () => {
    console.log("Server Port : ", port);
});