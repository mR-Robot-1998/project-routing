import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
    <Container>
       <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{marginLeft:35,color:'#fff' }}>Home</Link>
            <Link to="/courses" style={{marginLeft:35,color:'#fff'}}>Features</Link>
            <Link to="/about" style={{marginLeft:35,color:'#fff'}}>Pricing</Link>
          </Nav>
      </Navbar>
    </Container>
    </>
    )
}
