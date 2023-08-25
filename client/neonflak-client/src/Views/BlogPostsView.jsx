/* eslint-disable no-unused-vars */
import '../CustomCSS/CustomCSS.css'
import { useLoaderData } from 'react-router-dom';
import BlogPostCard from '../Components/BlogPostCard';
import PageLoader from '../Components/PageLoader/PageLoader';
import { useEffect, useState } from 'react';
import { ChangeTitle } from '../utils/ChangeTitle';
const BlogPostsView = () => {
    const loadedData = useLoaderData();
    const [allPosts,setAllPosts] = useState(loadedData);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
        ChangeTitle('Blog Posts');
    },[allPosts])
    if(loading){
        return <PageLoader/>;
    }else{
        return (
            <div>
                <div className="container">
                    <h1 className='text-center'>Blog Posts</h1>
                    <div className="blog-posts">
                        {
                            allPosts.map((post) => <BlogPostCard key={post._id} post={post}/>)
                        }
                    </div>
                </div>         
            </div>
        );

    }
    
    
};

export default BlogPostsView;