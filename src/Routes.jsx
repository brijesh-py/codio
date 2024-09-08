import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import Layout from "./Layout";

const Routes = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="/code/:codeID" element={<Layout />} />
    </>
  )
);

export default Routes;
