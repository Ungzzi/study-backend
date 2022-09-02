var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.post("/login", controller.login);

module.exports = router; // index.js를 모듈로 사용하겠다 선언