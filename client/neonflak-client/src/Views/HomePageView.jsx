import { useState,useEffect } from 'react';
import '../CustomCSS/CustomCSS.css'
import '../index.css'

const Loader = ()=>{
    return <h4 className='text-white'>Uploading..</h4>
}

const HomePageView = () => {
    const [isImageLoading,setImageLoading] = useState(false)
    const [isVideoLoading,setVideoLoading] = useState(false)
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
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const fetchImageData = async()=>{
            setImageLoading(true)
            const data = new FormData();
            data.append('file',blog.imagefile);
            data.append('upload_preset','rwtn2dqq');
            data.append('cloud_name','dmcpfuntl')

            const res = await fetch('https://api.cloudinary.com/v1_1/dmcpfuntl/image/upload',{
            method:'POST',
            body:data
            })
            const res_data = await res.json()
            
            if(res_data.version_id){
                setImageLoading(false)
                setBlog(prevBlog => ({ ...prevBlog, image_url: res_data.url }))
                return {statusOk:true}
            }
        }
        const fetchVideoData = async()=>{
            setVideoLoading(true)
            const data = new FormData();
            data.append('file',blog.videofile);
            data.append('upload_preset','onbrdpzf');
            data.append('cloud_name','dmcpfuntl')

            const res = await fetch('https://api.cloudinary.com/v1_1/dmcpfuntl/video/upload',{
            method:'POST',
            body:data
            })
            const res_data = await res.json()
            if(res_data.version_id){
                setVideoLoading(false)
                setBlog(prevBlog => ({ ...prevBlog, video_url: res_data.url }))
                return {statusOk:true}
            }
            
        }

        
        const imgUrl = await fetchImageData()
        const vidUrl = await fetchVideoData()
        if(imgUrl.statusOk && vidUrl.statusOk){
            console.log(blog)
        }
        e.target.reset();
    }
    const handleImageFile = (e) => {
        setBlog({...blog,imagefile:e.target.files[0]});
    }
    const handleVideoFile = (e) => {
        setBlog({...blog,videofile:e.target.files[0]});
    }
    useEffect(() => {
        if (blog.image_url && blog.video_url) {
           console.log(blog)
        }
    }, [blog.image_url, blog.video_url]);
    
  

    return (
        <div>
            <div className="main-block">
                <h1>File Upload</h1>
                <form onSubmit={handleSubmit}>
                    <div className="info">
                        <input type="text" name="title" placeholder="Title" onChange={(e)=>setBlog({...blog, name: e.target.value})}/>
                        <br />
                        <textarea name='Description' placeholder='Content' onChange={(e)=>setBlog({...blog, content: e.target.value})}>
                        </textarea>
                    </div>
                    <div className="file-section">
                        <input type="file" name="videofile" id="videofile" onChange={(e)=> handleVideoFile(e)}/>
                        <label htmlFor="file">Add Video [MPG, AVI, MP4 only]</label>
                    </div>
                    {isVideoLoading?<Loader/>:''}

                    <div className="file-section">
                        <input type="file" name="imagefile" id="imagefile" onChange={(e)=>handleImageFile(e)}/>
                        <label htmlFor="file">Add Thumbnail [JPG and PNG only] </label>
                    </div>
                    <div>
                        {isImageLoading?<Loader/>:''}
                    </div>
                    
                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HomePageView;