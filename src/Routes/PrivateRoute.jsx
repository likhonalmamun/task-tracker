import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center mt-[200px] mx-auto w-full items-center h-[200px]">
        <div>Loading.....</div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
