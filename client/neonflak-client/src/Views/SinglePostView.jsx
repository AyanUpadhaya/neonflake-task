import { Link, useLoaderData } from "react-router-dom";
import "../CustomCSS/CustomCSS.css";
import PageLoader from "../Components/PageLoader/PageLoader";
import { ChangeTitle } from '../utils/ChangeTitle';
const SinglePostView = () => {
  const loaderData = useLoaderData();
  ChangeTitle('Single Post');
  if(!loaderData){
    return <PageLoader/>
  }else{
    return (
        <div>
          <div className="main-block">
            <video width="600" height="500" controls autoPlay>
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
