import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/Home/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: 'login', 
            element: <Login></Login>
        }, 
        {
          path: '/about', 
          element: <About></About>
      }, 
        {
            path: 'signup', 
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);


  export default router;