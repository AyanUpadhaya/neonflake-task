import '../CustomCSS/CustomCSS.css'
import '../index.css'
const HomePageView = () => {
    return (
        <div>
            <div className="main-block">
                <h1>File Upload</h1>
                <form action="/">
                    <div className="info">
                        <input type="text" name="title" placeholder="Title"/>
                        <br />
                        <textarea name='content' placeholder='Content'>
                        </textarea>
                    </div>
                    <div className="file-section">
                        <input type="file" name="videofile" id="videofile"/>
                        <label htmlFor="file">Add Video [MPG, AVI, MP4 only]</label>
                    </div>
                    
                    <div className="file-section">
                        <input type="file" name="imagefile" id="imagefile"/>
                        <label htmlFor="file">Add Thumbnail [JPG and PNG only] </label>
                    </div>
                    
                    <button href="/" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HomePageView;