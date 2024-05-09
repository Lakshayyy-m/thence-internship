import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GetProjects from "./pages/GetProjects.jsx";
import { action as formAction } from "./actions/formAction.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/get-projects",
    element: <GetProjects />,
    action: formAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
