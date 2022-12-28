import React from "react";
import { toast } from "react-hot-toast";
import { FaPlus, FaPlusCircle, FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const navigate = useNavigate();
  const addTask = (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=8ecfeb1b65c2759500094d4f887b4d37",
      { method: "POST", body: formData }
    )
      .then((res) => res.json())
      .then((img) => {
        const task = {
          title: e.target.title.value,
          description: e.target.description.value,
          completed: false,
          comment: "",
          image: img.data.display_url,
        };
        // https://task-tracker-server.vercel.app
        fetch("https://task-tracker-server.vercel.app", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(task),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success(data.message);
            navigate("/my-tasks");
          });
      })
      .catch((er) => console.error(er.message));
  };
  return (
    <div>
      <form
        onSubmit={addTask}
        className="p-10 rounded-md border border-blue-500"
        action=""
      >
        <h1 className="text-2xl font-bold  text-center mb-7 text-rose-500">
          Add new task
        </h1>
        <div className="flex justify-evenly items-center">
          <div className="w-[40%]">
            <label className="text-lg font-bold text-blue-500" htmlFor="">
              Title :
            </label>
            <br />
            <input
              name="title"
              required
              className="px-5 py-2 rounded-md my-2 w-full border-2 border-blue-500 "
              type="text"
              placeholder="enter task title"
            />
            <div className="flex items-center mt-2">
              <label
                className="text-lg font-bold text-blue-500"
                htmlFor="image"
              >
                Task Image :
              </label>
              <label
                className="text-lg flex items-center gap-2 hover:border-blue-600 bg-rose-500 mx-5 px-4 py-1 uppercase border-2 duration-300 rounded-md font-bold text-white"
                htmlFor="image"
              >
                <span>Upload</span>{" "}
                <FaUpload className="bg-white text-rose-500 rounded-full p-1 box-content text-sm"></FaUpload>
              </label>
            </div>
            <input
              required
              className="hidden"
              type="file"
              name="image"
              id="image"
            />
          </div>
          <div className="w-[40%]">
            <label className="text-lg font-bold text-blue-500" htmlFor="">
              Description :
            </label>
            <br />
            <textarea
              required
              className="px-5 py-2 rounded-md my-2 w-full border-2 border-blue-500 "
              placeholder="enter task description"
              name="description"
              id=""
              rows="4"
            ></textarea>
          </div>
        </div>
        <button
          className="text-lg mt-7 flex items-center gap-3 justify-center   hover:scale-y-110 hover:border-blue-600 bg-amber-400  w-[88%]  mx-auto px-4 py-1 uppercase border-2 duration-300 rounded-md font-bold text-blue-900"
          type="submit"
        >
          <span>Add Task</span>{" "}
          <FaPlus className="bg-white rounded-full p-1 font-bold box-content text-xs"></FaPlus>
        </button>
      </form>
    </div>
  );
};

export default NewTask;
