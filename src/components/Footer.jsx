import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => (
  <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
    <Container
      style={{ display: "flex", justifyContent: "center", padding: "10px" }}
    >
      <p>Web Developer Blog</p>
    </Container>
  </Container>
);
