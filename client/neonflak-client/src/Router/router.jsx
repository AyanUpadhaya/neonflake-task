import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import HomePageView from "../Views/HomePageView";
import BlogPostsView from "../Views/BlogPostsView";
import SinglePostView from "../Views/SinglePostView";
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
                    const res = await fetch('https://neon-flake-server.vercel.app/api/post')
                    const data = await res.json()
                    return data
                  }
            },
            {
                path:'/posts/:id',
                element:<SinglePostView/>,
                loader: async ({params}) => {
                    const res = await fetch(`https://neon-flake-server.vercel.app/api/post/${params.id}`)
                    const data = await res.json()
                    return data
                  }
            }
        ]
    }
])

export default router;