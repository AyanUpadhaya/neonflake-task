const PostController = require('../controllers/postController')
const router = require('express').Router()

router.post('/', PostController.createPost);

module.exports = router;
