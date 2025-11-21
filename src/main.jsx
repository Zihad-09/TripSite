import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root";
import Blog from "./Page/Blog";
import TripEssentials from "./Page/TripEssentials";
import OurStory from "./Page/OurStory";
import Home from "./Page/HomeComponent/Home";
import Browsetours from "./Page/Browsetours";
import Newandfeaturetour from "./Page/HomeComponent/Newandfeaturetour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/browsetours", element: <Browsetours /> },
      { path: "/ourstory", element: <OurStory /> },
      { path: "/tripessentials", element: <TripEssentials /> },
      { path: "/browsetours", element: <Newandfeaturetour /> },
    ],
  },
]);
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
