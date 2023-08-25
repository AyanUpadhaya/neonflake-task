/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react';
import '../CustomCSS/CustomCSS.css';
import '../index.css';
import Loader from '../utils/Loader';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ChangeTitle } from '../utils/ChangeTitle';


/**
 * Steps
 * Create state to manage blog data
 * Update state from form data
 * fetch image url from api by uploading to cloudinary
 * fetch video url from api by uploading to cloudinary
 * update image url and video url properties in state
 * when both image and video url are set then trigger useEffect
 * useEffect will execute createPost function that will store all data but
 * it will exclude imagefile and videofile properties
 * 
 */


const HomePageView = () => {
    const navigate = useNavigate();
    const [isImageLoading,setImageLoading] = useState(false);
    const [isVideoLoading,setVideoLoading] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [blog,setBlog] = useState(
        {
            name:'',
            content:'',
            imagefile:'',
            image_url:'',
            videofile:'',
            video_url:'',
        }
    );
    useEffect(()=>{
        ChangeTitle('Home Page')
    },[])
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const fetchImageData = async()=>{
            setImageLoading(true)
            const data = new FormData();
            data.append('file',blog.imagefile);
            data.append('upload_preset','rwtn2dqq');
            data.append('cloud_name','dmcpfuntl');

            const res = await fetch('https://api.cloudinary.com/v1_1/dmcpfuntl/image/upload',{
            method:'POST',
            body:data
            })
            const res_data = await res.json();
            
            if(res_data.version_id){
                setImageLoading(false);
                setBlog(prevBlog => ({ ...prevBlog, image_url: res_data.url }))
                return {statusOk:true};
            }
        }
        const fetchVideoData = async()=>{
            setVideoLoading(true)
            const data = new FormData();
            data.append('file',blog.videofile);
            data.append('upload_preset','onbrdpzf');
            data.append('cloud_name','dmcpfuntl');

            const res = await fetch('https://api.cloudinary.com/v1_1/dmcpfuntl/video/upload',{
            method:'POST',
            body:data
            })
            const res_data = await res.json();
            if(res_data.version_id){
                setVideoLoading(false)
                setBlog(prevBlog => ({ ...prevBlog, video_url: res_data.url }));
                return {statusOk:true};
            }
            
        }

        
        const imgUrl = await fetchImageData();
        const vidUrl = await fetchVideoData();
        e.target.reset();
    }
    const handleImageFile = (e) => {
        const fileArray = e.target.files[0].name.split('.');
        if(fileArray[fileArray.length-1]!== 'png' && fileArray[fileArray.length-1]!== 'jpg' && fileArray[fileArray.length-1]!== 'PNG' && fileArray[fileArray.length-1]!== 'JPG'){
            Swal.fire({
                icon: 'error',
                text: 'Please upload a valid image file!',
              })
            setDisabled(true)
            e.target.value = null;
        }else{
            setBlog({...blog,imagefile:e.target.files[0]});
            setDisabled(false);
        }
        
    }
    const handleVideoFile = (e) => {
        const fileArray = e.target.files[0].name.split('.');
        if(fileArray[fileArray.length-1]!== 'mpg' && fileArray[fileArray.length-1]!== 'MPG' && fileArray[fileArray.length-1]!== 'avi' && fileArray[fileArray.length-1]!== 'AVI' && fileArray[fileArray.length-1]!== 'mp4' && fileArray[fileArray.length-1]!== 'MP4'){
            Swal.fire({
                icon: 'error',
                text: 'Please upload a valid video file!',
              });
            e.target.value = null;
            setDisabled(true)
        }else{
            setBlog({...blog,videofile:e.target.files[0]});
            setDisabled(false);
        }
       
    }
    const createNewPost = async()=>{
        const {imagefile, videofile, ...updateBlog} = blog;
        const res = await fetch('https://neonflake-server-pt5j.onrender.com/api/post',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updateBlog)
        })
        const res_data = await res.json();
        if(res_data._id){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/posts');
        }
    }
    //create post when we get both image url and video url from cloudinary
    useEffect(() => {
        if (blog.image_url && blog.video_url) {
            createNewPost()
        }
    }, [blog.image_url, blog.video_url]);
    
    
  

    return (
        <div>
            <div className="main-block">
                <h1>File Upload</h1>
                <form onSubmit={handleSubmit}>
                    <div className="info">
                        <input type="text" name="title" placeholder="Title" onChange={(e)=>setBlog({...blog, name: e.target.value})}
                        maxLength={50} 
                        required/>
                        <br />
                        <textarea name='Description' maxLength={200}  placeholder='Content' onChange={(e)=>setBlog({...blog, content: e.target.value})}>
                        </textarea>
                    </div>
                    <div className="file-section">
                        <input type="file" name="videofile" id="videofile" onChange={(e)=> handleVideoFile(e)} required/>
                        <label htmlFor="file">Add Video [MPG, AVI, MP4 only]</label>
                    </div>
                    {isVideoLoading?<Loader msg={'Uploading...'}/>:''}

                    <div className="file-section">
                        <input type="file" name="imagefile" id="imagefile" onChange={(e)=>handleImageFile(e)} required/>
                        <label htmlFor="file">Add Thumbnail [JPG and PNG only] </label>
                    </div>
                    <div>
                        {isImageLoading?<Loader msg={'Uploading...'}/>:''}
                    </div>
                    
                    <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HomePageView;