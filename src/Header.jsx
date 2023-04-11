import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <>
    <Container>
       <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" style={{marginLeft:35,color:'#fff' }}>Home</NavLink>
            <NavLink to="/courses" style={{marginLeft:35,color:'#fff'}}>Features</NavLink>
            <NavLink to="/about" style={{marginLeft:35,color:'#fff'}}>About</NavLink>
            <NavLink to="/about/setting" style={{marginLeft:35,color:'#fff'}}>Setting</NavLink>
            <NavLink to="/about/dashboard" style={{marginLeft:35,color:'#fff'}}>Dashboard</NavLink>
            <NavLink to="/login" style={{marginLeft:35,color:'#fff'}}>Login</NavLink>
            <NavLink to="/panel" style={{marginLeft:35,color:'#fff'}}>Panel</NavLink>
          </Nav>
      </Navbar>
    </Container>
    </>
    )
}
