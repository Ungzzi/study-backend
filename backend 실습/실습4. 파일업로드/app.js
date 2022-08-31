const multer = require("multer");
const path = require("path")
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {      // 목적지 지정 함수
            done(null, 'uploads/');
        },
        filename(req, file, done) {         // 파일 지정 함수
            const ext = path.extname(file.originalname);    // path.extname -> " .확장자 " 를 불러오는 함수
            done(null, req.body.ID + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },  // 업로드 파일 용량 제한
})

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
app.use('/uploads', express.static('uploads'));

// POST 사용을 위한 선언
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("fileUpload");
})

app.post("/upload", upload.single("userfile"), (req, res) => {  // 여러개 업로드시 upload.array()
    res.send(req.file);

})

app.listen(port, () => {
    console.log("server open:", port);
})