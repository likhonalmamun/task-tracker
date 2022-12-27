import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddTask from "../Pages/AddTask";
import CompletedTask from "../Pages/CompletedTask";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyTasks from "../Pages/MyTasks";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/add-task", element: <AddTask></AddTask> },
      { path: "/my-tasks", element: <MyTasks></MyTasks> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/completed-tasks", element: <CompletedTask></CompletedTask> },
    ],
  },
]);
