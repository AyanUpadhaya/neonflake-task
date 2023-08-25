import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import HomePageView from "../Views/HomePageView";
import BlogPostsView from "../Views/BlogPostsView";
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children: [
            {
                path:'/',
                element:<HomePageView/>
            },
            {
                path:'/posts',
                element:<BlogPostsView/>,
                loader: async () => {
                    const res = await fetch('http://localhost:5000/api/post')
                    const data = await res.json()
                    return data
                  }
            }
        ]
    }
])

export default router