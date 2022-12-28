import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  FaArrowAltCircleRight,
  FaCheckCircle,
  FaRegEdit,
  FaTrash,
} from "react-icons/fa";
const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://task-tracker-server.vercel.app/my-tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.result));
  }, []);

  const deleteTask = (id) => {
    fetch(`https://task-tracker-server.vercel.app/my-tasks/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.message));
  };
  return (
    <div>
      <div className="p-10 border border-blue-500 rounded-md">
        <h1 className="text-2xl font-bold  text-center mb-7 text-blue-500">
          All Pending Tasks ({tasks.length})
        </h1>
        <div>
          {tasks.map((task) => (
            <div
              key={task._id}
              className="flex justify-between rounded-lg hover:scale-y-125 border-blue-500 duration-300 bg-gray-300 text-lg font-bold text-white px-5 border-2 py-4 mb-5"
            >
              <div>
                <h1 className="text-center font-bold text-rose-600 mb-3">
                  {task.title}
                </h1>
                <Link
                  className="border flex items-center gap-2 bg-amber-500 hover:text-blue-600 duration-300 rounded-lg text-sm px-4 py-1"
                  to={`/my-tasks/${task._id}`}
                >
                  <span>View Details</span>{" "}
                  <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <Link
                  to={`/edit-task/${task._id}`}
                  className="p-2 bg-amber-600 hover:text-black duration-300 border rounded-full"
                >
                  <FaRegEdit></FaRegEdit>
                </Link>
                <Link
                  className="px-4 py-1 flex items-center gap-2 hover:bg-blue-800 duration-300 bg-blue-500 rounded-md"
                  to={`/complete-task/${task._id}`}
                >
                  <span>Completed</span> <FaCheckCircle></FaCheckCircle>
                </Link>
                <button
                  className="p-2 bg-amber-600 hover:text-black duration-300 border rounded-full"
                  onClick={() => deleteTask(task._id)}
                >
                  <FaTrash></FaTrash>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
