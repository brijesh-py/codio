import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadFilesFromLocal } from "./store/slices/editorSlice";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadFilesFromLocal());
  }, [dispatch]);
  return <RouterProvider router={Routes} />;
}

export default App;
