const router = require("express").Router(); // express 모듈에서 Router 클래스 임포터
const {
  updateTask,
  updateCompletedTask,
} = require("../controlles/updateTaskCtrl");

router.put("/updateTask", updateTask);
router.patch("/updateCompletedTask", updateCompletedTask);

module.exports = router;
