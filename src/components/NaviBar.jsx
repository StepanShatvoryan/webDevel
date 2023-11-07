import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
a,
.mro{
  gap: 10px;
  width:330px;
  display: flex;
  justify-content: end;
  padding: 0 25px;
}
.container{
  margin: 0;
}
.nav-link{
  width: 60px;
}
.nam{
  color: #adb1b8;
}
.nam:hover{
  color: white;
}
.navbar-collapse{
  display: flex!important;
  flex-basis: auto;
  justify-content: space-between;
}
}
`;

export default function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>webDev blog</Navbar.Brand>
            <Navbar.Brand aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link className="nam" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nam" to="/users">
                    Users
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nam" to="/about">
                    About
                  </Link>
                </Nav.Link>
              </Nav>
              <div className="tab" style={{ width: "820px" }}></div>
              <Nav className="mro">
                <Button variant="primary" className="mr-2" onClick={handleShow}>
                  Log in
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  Sign out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Well never share your email
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              <Form.Text className="text-muted">
                Well never share your email
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remeber me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
