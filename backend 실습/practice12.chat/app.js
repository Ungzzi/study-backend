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
});

userList = {}

io.on("connection", function (socket) {
    socket.on('enter', function (data) {
        screenYs
        socket.broadcast.emit('enter', data);
        socket.name = data;
        userList[socket.name] = socket.id
    });

    socket.on('msg', function (data) {
        var info = {
            name: data.name,
            msg: data.msg
        }
        io.emit('msg', info);
    });

    socket.on('DM', function (data) {
        io.to(userList[data]).emit('DM', data);
    })

    socket.on('disconnect', function () {
        var msg = socket.name + '님이 퇴장했습니다.';
        socket.broadcast.emit('exit', {
            server: 'SERVER',
            name: socket.name,
            msg: msg
        });
    });

});

http.listen(port, () => {
    console.log("Server Port : ", port);
});