const PostController = require("../controllers/postController");
const { authentication, authorizationPost } = require("../middleware/auth");

const router = require("express").Router();
router.use(authentication)
router.get("/", PostController.getAllPost);
router.get("/:postId", PostController.getOnePost);
router.post("/", PostController.createPost);
router.put("/:postId", authorizationPost, PostController.updatePost);
router.delete("/:postId",authorizationPost, PostController.deletePost);
module.exports = router;