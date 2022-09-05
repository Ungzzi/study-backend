var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

// 로그인 라우터
router.get("/", controller.main);
router.post("/login", controller.login);

// DB 참조용 라우터
var controllerV = require("../controller/CVisitor");
router.get("/visitor", controllerV.visitor);
router.post("/visitor/post", controllerV.post_visitor);
router.post("/visitor/delete", controllerV.delete_visitor);
router.post("/visitor/get", controllerV.get_visitor);
router.post("/visitor/modify", controllerV.modify_visitor);

module.exports = router; // index.js를 모듈로 사용하겠다 선언