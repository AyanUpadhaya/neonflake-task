import { Link } from "react-router-dom";
import './Nav.css'
const Nav = () => {
    return (
        <div className="nav">
            <Link to="/"><h2 className="logo">UploadBase</h2></Link>
            <div>
                <Link to='/posts' className="btn btn-danger">View Uploads</Link>
            </div>
            
        </div>
    );
};

export default Nav;