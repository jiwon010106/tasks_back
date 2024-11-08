const router = require("express").Router(); // express 모듈에서 Router 클래스 임포터
const { postTask } = require("../controlles/postTaskCtrl");

router.post("/postTask", postTask);

module.exports = router;
