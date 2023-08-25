const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name:String,
    content:String,
    image_url:String,
    video_url:String,
})

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;