import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import { useSelector } from "react-redux";

function App() {
  const { dark } = useSelector((state) => state.theme);
  return (
    <div className={dark ? "bg-[#000000]" : ""}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
