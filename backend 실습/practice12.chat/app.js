const multer = require("multer");
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname) + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
})

const express = require("express");
const app = express();
var http = require("http").Server(app); //express 로 만든 서버를 http와 연결
var io = require("socket.io")(http);
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('static'));
app.use('/uploads', express.static('uploads'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/upload", upload.single("userfile"), (req, res) => {
    res.send(req.file);
})

userList = {}

io.on("connection", function (socket) {
    socket.on('enter', function (data) {
        if (userList.hasOwnProperty(data)) {
            socket.emit('check_id', false);
        }
        else {
            socket.emit('check_id', true);
            socket.name = data;
            userList[socket.name] = socket.id;
            var info = {
                name: data,
                user: userList
            }
            io.emit('enter', info);
        }
    });

    socket.on('msg', function (data) {
        var info = {
            name: data.name,
            msg: data.msg,
            img: data.img
        }
        io.emit('msg', info);
    });

    socket.on('DM', function (data) {
        socket.emit('DM', data);
        io.to(userList[data.targetName]).emit('DM', data);
    })

    socket.on('disconnect', function () {
        var msg = socket.name + '님이 퇴장했습니다.';
        delete userList[socket.name];
        socket.broadcast.emit('exit', {
            server: 'SERVER',
            name: socket.name,
            user: userList,
            msg: msg
        });
    });

});

http.listen(port, () => {
    console.log("Server Port : ", port);
});