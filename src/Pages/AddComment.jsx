import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const AddComment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const completeTask = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    fetch(`https://task-tracker-server.vercel.app/my-tasks/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        navigate("/completed-tasks");
      });
  };
  return (
    <div className="border border-blue-500 rounded-md my-14 p-10">
      <h1 className="text-2xl font-bold  text-center mb-7 text-amber-500">
        Add comment on completing the task
      </h1>
      <form
        onSubmit={completeTask}
        className="mx-auto w-2/5 text-lg font-bold text-rose-500"
      >
        <label htmlFor="">Comment : </label> <br />
        <input
          required
          name="comment"
          className="my-2 w-full py-2 px-5 border-2 border-amber-500 rounded-lg "
          placeholder="enter your comment here"
          type="text"
        />
        <button
          type="submit"
          className="bg-rose-500 text-white my-3 hover:scale-90 duration-300 hover:bg-rose-700 py-1 px-5 rounded-md"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
