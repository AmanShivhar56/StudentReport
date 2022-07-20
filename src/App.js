import { useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./App.css";
import Add from "./pages/Product/Add";
import Display from "./pages/Product/Display";

function App() {
  const [component, setComponent] = useState(null);
  const [, setRefresh] = useState(false);

  const onChange = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button onClick={() => setComponent(<Add onChange={onChange} />)}>
        Add
      </Button>
      <Button onClick={() => setComponent(<Display onChange={onChange} />)}>
        Display
      </Button>
      {component}
    </div>
  );
}

export default App;
