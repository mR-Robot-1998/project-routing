import Courses from "./Courses";
import MainCourse from "./MainCourse";
import About from "./About/About";
import Setting from "./About/Setting";
import Dashboard from "./About/Dashboard";

let routes = [
  { path: "/courses", element: <Courses /> },
  { path: "/course/:courseID", element: <MainCourse /> },

  {
    path: "/about/",
    element: <About />,
    children: [
      { path: "setting", element: <Setting /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
];
export default routes;
