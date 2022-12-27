import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex px-20 bg-gray-100 h-20 items-center  justify-between">
      <div className="text-3xl font-bold italic ">
        <span className="text-blue-500">T</span>
        <span className="text-amber-600">-</span>
        <span className="text-rose-500">T</span>
      </div>
      <div>
        <ul className="flex font-semibold text-lg text-blue-500 items-center gap-5">
          <li className="hover:text-rose-500 hover:scale-110 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-rose-500 hover:scale-110 duration-300">
            <Link to="/add-task">Add Task</Link>
          </li>
          <li className="hover:text-rose-500 hover:scale-110 duration-300">
            <Link to="/my-tasks">My Tasks</Link>
          </li>
          <li className="hover:text-rose-500 hover:scale-110 duration-300">
            <Link to="/completed-tasks">Completed Tasks</Link>
          </li>
          <li className="hover:text-rose-500 hover:scale-110 duration-300">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-rose-500 hover:scale-110 duration-300">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
