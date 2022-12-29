import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CompletedTask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://task-tracker-server.vercel.app/completed-tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks));
  }, []);
  const deleteTask = (id) => {
    fetch(`https://task-tracker-server.vercel.app/my-tasks/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.message));
  };
  const incompleteTask = (id) => {
    fetch(`https://task-tracker-server.vercel.app/incomplete/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        navigate("/my-tasks");
      });
  };
  return (
    <div className="border rounded-md my-10 border-blue-500 p-3 lg:p-10">
      <h1 className="text-2xl font-bold  text-center mb-7 text-rose-500">
        All Completed Tasks ({tasks.length})
      </h1>
      <div>
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-[rgb(217,218,220)] text-blue-600 my-7 items-center p-5 gap-7 flex-col sm:flex-row rounded-md flex justify-between"
          >
            <div>
              <h1 className="text-xl font-bold my-2">{task.title}</h1>
              <p className="font-bold bg-white px-3 py-1 rounded-md text-rose-500">
                Comment :{" "}
                <span className="text-blue-500 italic">{task.comment}</span>
              </p>
            </div>
            <div className="flex">
              <button
                onClick={() => incompleteTask(task._id)}
                className="font-bold  px-3 hover:scale-95 duration-300 hover:bg-gray-100 py-1 bg-white rounded-md border text-amber-500"
              >
                Incomplete
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="font-bold mx-4 hover:scale-95 duration-300 hover:bg-rose-800 px-3 py-1 bg-rose-500 rounded-md border text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
