const PostController = require('../controllers/postController')
const router = require('express').Router()

router.get('/', PostController.getAllPosts);
router.post('/', PostController.createPost);
router.get('/:id', PostController.findPostById);

module.exports = router;
