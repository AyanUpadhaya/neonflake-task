import { useLoaderData } from 'react-router-dom';
import '../CustomCSS/CustomCSS.css'
import BlogPostCard from '../Components/BlogPostCard';
const BlogPostsView = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    return (
        <div>
            <div className="main-block">
                <h1>Blog Posts</h1>
                <div className="blog-posts">
                    {
                        loadedData.map((post) => <BlogPostCard key={post._id} post={post}/>)
                    }
                </div>
            </div>         
        </div>
    );
};

export default BlogPostsView;