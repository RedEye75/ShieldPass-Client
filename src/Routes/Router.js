import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ContactUs from "../Pages/Contact/ContactUs";
import AddPassword from "../Pages/Dashboard/AddPassword";
import MyPasses from "../Pages/Dashboard/MyPasses";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/addPassword",
        element: <AddPassword />,
      },
      {
        path: "/dashboard/myPasswords",
        element: <MyPasses />,
      },
    ],
  },
]);

export default router;
