const Post = require('../models/PostModel');

const createPost = async (req, res) => {
    try{
        console.log('Api hit')
        const post = await Post.create(req.body);
        return res.status(200).json(post)
    }catch(err){
        return res.status(500).json(err)
    }
}
const getAllPosts = async(req,res)=>{
    try{
        const posts = await Post.find();
        return res.status(200).json(posts)
    }catch(err){
        return res.status(500).json(err)
    }
} 

module.exports = {
    createPost,
    getAllPosts
}