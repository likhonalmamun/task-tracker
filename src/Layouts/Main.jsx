import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-[1200px] max-h-fit min-h-screen mt-7 mb-20 pt-20 pb-10 px-3 lg:px-16 mx-auto shadow-lg shadow-blue-500">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
