import {Link,Outlet} from 'react-router-dom';
import Setting from './Setting';
export default function About() {
  return (
        <>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <h1 style={{textAlign:'center',marginTop:20}}>Hello To About </h1>
        <Link to='setting'>Setting</Link>
        <Link to='dashboard'>Dashboard</Link>

        </div>
        <Outlet/>
        </>
    )
}
