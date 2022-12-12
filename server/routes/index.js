const router = require("express").Router();
const UserRouter = require("./userRouter")
const postRouter = require("./postRouter");
const errorHandler = require("../middleware/errorHandler");


router.use("/user" , UserRouter)
router.use("/post" , postRouter)

router.use(errorHandler)

module.exports = router;