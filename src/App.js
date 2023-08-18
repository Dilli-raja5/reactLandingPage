import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, NavDropdown, Navbar, Nav, Button, Row, Col, Image, Card } from "react-bootstrap";



export default function App() {
  return (
    <div className="App">
      <header >
        <Navbar collapseOnSelect expand="lg" className=" custom-navbar">
          <Container>
            <Navbar.Brand href="#home"><h3> FrontEnd Developer</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav className="justify-content-end">
                <NavDropdown title="About Us" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#Action">Career</NavDropdown.Item>
                  <NavDropdown.Item href="#Products">Products</NavDropdown.Item>
                  <NavDropdown.Item href="#Features">Features</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action">More</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing"></Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Button variant="outline-success">SignIn</Button>{' '}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="p-4 my-4 row-content">
            <Col sm={7}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"
                fluid rounded className
              />
            </Col>
            <Col sm={5} >
              <h3 className='font-light'>ReactJs Tutorial</h3>
              <p className='mt-4'>React. js, is an open-source JavaScript library designed by Facebook, used for building user interfaces or UI components. React is of course not the only UI library out there. Preact, Vue,
                Angular, Svelte, Lit and many others are also great for composing interfaces from reusable elements.
                Lit and many others are also great for composing interfaces from reusable elements.</p>
              <Button variant="primary">Learn More</Button>
            </Col>
          </Row>
          <Row>
          <Card className='text-center text-white bg-dark'>
            <Card.Body className='para'>
              Best react component libraries for Development are
              Redux Material,UI React Virtualized,Redux Form etc.
              
            </Card.Body>
          </Card>
          </Row>
         
        </Container>
      </main>
      
    </div>
  );
}

