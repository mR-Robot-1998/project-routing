
import {Routes,Route} from 'react-router-dom';
import Courses from './Courses';
import MainCourse from './MainCourse';
import Header from './Header';
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/course/:courseId' element={<MainCourse/>}></Route>
    </Routes>
    </>
    )
}

export default App
