const { deleteTask } = require("../controlles/deleteTaskCtrl");
const router = require("express").Router();

router.delete("/deleteTask/:taskId", deleteTask);

module.exports = router;
