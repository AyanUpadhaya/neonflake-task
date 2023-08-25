/* eslint-disable react/prop-types */
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
                <a href="#" className="btn btn-primary">View</a> 
            </div>
        </div>
    )
}
export default BlogPostCard;