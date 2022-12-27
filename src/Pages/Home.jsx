import React, { useContext } from "react";
import NewTask from "../Components/NewTask";
import RecentTasks from "../Components/RecentTasks";
import { AuthContext } from "../Contexts/AuthProvider";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-20 font-bold text-amber-500">
        Manage your tasks with <span className="text-blue-500">Task</span>-
        <span className="text-rose-500">Tracker</span>.
      </h1>
      <NewTask></NewTask>
      <RecentTasks></RecentTasks>
    </div>
  );
};

export default Home;
