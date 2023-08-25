const PostController = require('../controllers/postController')
const router = require('express').Router()

router.get('/', PostController.getAllPosts);
router.post('/', PostController.createPost);

module.exports = router;
