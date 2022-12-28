import React from "react";
import { toast } from "react-hot-toast";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const task = useLoaderData();
  const navigate = useNavigate();
  const deleteTask = () => {
    fetch(`https://task-tracker-server.vercel.app/my-tasks/${task._id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        navigate("/my-tasks");
      });
  };
  return (
    <div className="my-14 border p-10  rounded-md border-blue-500">
      <h1 className="text-2xl font-bold  text-center mb-7 text-rose-500">
        Task details
      </h1>
      <div className="flex gap-7 p-7 pr-16 h-fit rounded-md bg-gray-300 items-center justify-between">
        <div className="w-1/3">
          <img
            className="p-2 border-2 border-rose-500 rounded-lg "
            src={task.image}
            alt=""
          />
        </div>
        <div className="flex  flex-col min-h-[150px] w-[60%] justify-between">
          <div>
            <h1 className="text-2xl my-3 font-bold text-rose-500">
              Task Title :{" "}
              <span className="bg-gray-200 font-semibold text-rose-500 p-1 rounded-lg">
                {task.title}
              </span>
            </h1>
            <p className="text-s font-bold text-blue-700">
              Description :{" "}
              <span className="font-normal">{task.description}</span>
            </p>
          </div>
          <div className="flex gap-5 justify-between">
            <Link
              to={`/edit-task/${task._id}`}
              className="w-full bg-amber-500 py-1 uppercase font-bold flex gap-3 items-center justify-center rounded-lg hover:scale-95 duration-300 hover:bg-amber-800 text-white"
            >
              Edit <FaEdit></FaEdit>
            </Link>

            <Link
              to={`/complete-task/${task._id}`}
              className="w-full bg-blue-500 py-1 uppercase font-bold flex gap-3 items-center justify-center rounded-lg hover:scale-95 duration-300 hover:bg-blue-800 text-white"
            >
              Complete <FaCheckCircle></FaCheckCircle>
            </Link>
            <button
              onClick={deleteTask}
              className="w-full bg-rose-500 py-1 uppercase font-bold flex gap-3 items-center justify-center rounded-lg hover:scale-95 duration-300 hover:bg-rose-800 text-white"
            >
              Delete <FaTrash></FaTrash>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
