
import {useRoutes} from 'react-router-dom';
import Courses from "./Courses";
import Login from "./Login";
import Panel from "./Panel";
import MainCourse from "./MainCourse";
import About from "./About/About";
import Header from './Header';
import Setting from './About/Setting';
import Dashboard from './About/Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {

  let router1=useRoutes([
  { path: '/courses', element: <Courses /> },
  {path: '/course/:courseID', element: <MainCourse />},

  {
    path: "/about/",
    element: <About />,
    children: [
      { path: "setting", element: <Setting /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/*', element:<PrivateRoute/>,children:[
    {path:'panel',element:<Panel/>}
  ] },
])
  return (
    <>
    <Header/>
      {router1}
    </>
    )
}

export default App
