import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddComment from "../Pages/AddComment";
import AddTask from "../Pages/AddTask";
import CompletedTask from "../Pages/CompletedTask";
import EditTask from "../Pages/EditTask";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyTasks from "../Pages/MyTasks";
import Register from "../Pages/Register";
import TaskDetails from "../Pages/TaskDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/add-task", element: <AddTask></AddTask> },
      { path: "/my-tasks", element: <MyTasks></MyTasks> },
      {
        path: "/my-tasks/:id",
        element: <TaskDetails></TaskDetails>,
        loader: ({ params }) =>
          fetch(`https://task-tracker-server.vercel.app/my-tasks/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/completed-tasks", element: <CompletedTask></CompletedTask> },
      { path: "/complete-task/:id", element: <AddComment></AddComment> },
      {
        path: "/edit-task/:id",
        element: <EditTask></EditTask>,
        loader: ({ params }) =>
          fetch(`https://task-tracker-server.vercel.app/my-tasks/${params.id}`),
      },
    ],
  },
]);
