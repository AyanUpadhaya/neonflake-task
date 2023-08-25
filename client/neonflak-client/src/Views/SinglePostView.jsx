import { Link, useLoaderData } from "react-router-dom";
import "../CustomCSS/CustomCSS.css";
import PageLoader from "../Components/PageLoader/PageLoader";
const SinglePostView = () => {
  const loaderData = useLoaderData();
  if(!loaderData){
    return <PageLoader/>
  }else{
    return (
        <div>
          <div className="main-block">
            <h1>Single Post</h1>
            <video width="600" height="500" controls>
              <source src={loaderData.video_url} type="video/mp4" />
            </video>
            <div className="post-info">
                <h2>{loaderData.name}</h2>
                <h3>Description</h3>
                <hr />
                <p>{loaderData.content}</p>
            </div>
            <div>
                <Link to="/posts" className="btn btn-danger">Return to Posts</Link>
            </div>
          </div>
        </div>
      );
  }
  
};

export default SinglePostView;
