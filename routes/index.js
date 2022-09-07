const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();

router.get("/", visitor.get_visitors);
router.post("/write", visitor.post_comment);
router.get("/get", visitor.get_visitor);
router.patch("/edit", visitor.patch_comment);   // post와 같은 기능
router.delete("/delete", visitor.delete_comment);   // post와 같은 기능
module.exports = router;