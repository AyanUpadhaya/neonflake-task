/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../CustomCSS/CustomCSS.css'
const BlogPostCard = ({post})=>{
    return(
        <div className="blog-post-card" >
            <div className="card-header">
                <img src={post.image_url} alt="post image" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">{post.content.slice(0,100)}...</p>
                <Link to={`/posts/${post._id}`} className="btn btn-primary">View</Link> 
            </div>
        </div>
    )
}
export default BlogPostCard;