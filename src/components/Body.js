import Login from "./Login"
import { Browse } from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShowTrailer } from "./ShowTrailer";


export const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        }, 
        {
            path: "/browse",
            element: <Browse />
        }, {
            path: "/trailer/:movieId",
            element: <ShowTrailer />
        }
    ])

    
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}