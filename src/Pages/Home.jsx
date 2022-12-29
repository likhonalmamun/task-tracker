import React from "react";
import NewTask from "../Components/NewTask";
import RecentTasks from "../Components/RecentTasks";

const Home = () => {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl text-center mb-20 font-bold text-amber-500">
        Manage your tasks with <span className="text-blue-500">Task</span>-
        <span className="text-rose-500">Tracker</span>.
      </h1>
      <NewTask></NewTask>
      <RecentTasks></RecentTasks>
    </div>
  );
};

export default Home;
