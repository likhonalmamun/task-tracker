import React from "react";
import { toast } from "react-hot-toast";
import { FaUpload } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const EditTask = () => {
  const task = useLoaderData();
  const navigate = useNavigate();
  const editTask = (e) => {
    e.preventDefault();
    const updatedTask = {
      title: e.target.title.value,
      image: e.target.image.value,
      description: e.target.description.value,
    };
    fetch(`https://task-tracker-server.vercel.app/edit-task/${task._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        navigate("/my-tasks");
      });
  };
  return (
    <div>
      <form
        onSubmit={editTask}
        className="lg:p-10 p-2 rounded-md border border-blue-500"
        action=""
      >
        <h1 className="text-2xl font-bold  text-center mb-7 text-rose-500">
          Edit task
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-evenly items-center">
          <div className="sm:w-[40%] w-full">
            <label className="sm:text-lg font-bold text-blue-500" htmlFor="">
              Title :
            </label>
            <br />
            <input
              name="title"
              defaultValue={task.title}
              required
              className="px-5 py-2 rounded-md my-2 w-full border-2 border-blue-500 "
              type="text"
              placeholder="enter task title"
            />

            <label
              className="sm:text-lg font-bold text-blue-500"
              htmlFor="image"
            >
              Image URL :
            </label>
            <br />
            <input
              required
              defaultValue={task.image}
              className="px-5 py-2 rounded-md my-2 w-full border-2 border-blue-500 "
              type="text"
              name="image"
              id="image"
              placeholder="new image URL"
            />
          </div>
          <div className="sm:w-[40%] w-full">
            <label className="sm:text-lg font-bold text-blue-500" htmlFor="">
              Description :
            </label>
            <br />
            <textarea
              defaultValue={task.description}
              required
              className="px-5 py-2 rounded-md my-2 w-full border-2 border-blue-500 "
              placeholder="enter task description"
              name="description"
              id=""
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="flex mx-auto sm:w-[88%] gap-5 justify-center">
          <button
            className="text-lg flex-1  mt-7 flex items-center gap-3 justify-center  
            hover:border-blue-600 bg-amber-400 py-1 uppercase hover:scale-y-110
             border-2 duration-300 rounded-md font-bold text-blue-900"
            type="submit"
          >
            <span>Update</span>{" "}
            <FaUpload className="bg-white rounded-full p-1 box-content text-sm"></FaUpload>
          </button>
          <Link
            to="/my-tasks"
            className="text-lg px-5 mt-7 flex items-center gap-3 justify-center  hover:scale-95  hover:bg-rose-700
           bg-rose-500 py-1 uppercase border-2 duration-300 rounded-md font-bold text-white"
            type="submit"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
