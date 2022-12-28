import React, { useEffect, useState } from "react";
import { FaArrowRight, FaCheck, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://task-tracker-server.vercel.app")
      .then((res) => res.json())
      .then((data) => setTasks(data.result));
  }, []);
  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold  text-center mb-7 text-rose-500">
        Recent tasks ({tasks.length})
      </h1>
      <div className="flex flex-wrap gap-7 justify-evenly">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="p-7 flex-1 hover:scale-105 duration-300 flex justify-between items-center rounded-2xl text-xl font-bold bg-amber-400 text-blue-800"
          >
            <h1>
              <span className="text-rose-600">{task.title}</span>
            </h1>
            <h1 className="text-base  font-extrabold">
              {task.completed ? (
                <FaCheck className="text-base animate-pulse text-green-500 border box-content bg-white rounded-full p-1 "></FaCheck>
              ) : (
                <FaSpinner className="animate-spin text-blue-700 border box-content bg-white rounded-full p-1 "></FaSpinner>
              )}
            </h1>
          </div>
        ))}
      </div>
      <Link
        className="text-lg uppercase max-w-[338px] flex items-center mx-auto font-bold text-white hover:scale-95 duration-300 py-2 rounded-md my-10 justify-center gap-3 bg-rose-500"
        to="/my-tasks"
      >
        <span>View All Tasks</span>{" "}
        <FaArrowRight className="scale-x-150"></FaArrowRight>
      </Link>
    </div>
  );
};

export default RecentTasks;
