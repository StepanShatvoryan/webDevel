import React from "react";
import { Slider } from "./Slider";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import oceans1 from "../src/images/oceans1.jpg";
import oceans2 from "../src/images/oceans2.jpg";
import oceans3 from "../src/images/oceans3.jpg";
import gor1 from "../src/images/gor1.jpg";
import Jumbotron from "./components/Jumbotron";

export const Home = () => (
  <>
    <Slider />
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              width: "18rem",
              textAlign: "center",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
            }}
          >
            <Card.Img variant="top" display="block" src={oceans1} />
            <Card.Body>
              <Card.Title>webDev Blog</Card.Title>
              <Card.Text>
                Cillum excepteur aliquip mollit nulla aute cillum et esse
                labore.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              width: "18rem",
              textAlign: "center",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
            }}
          >
            <Card.Img variant="top" src={oceans2} />
            <Card.Body>
              <Card.Title>webDev Blog</Card.Title>
              <Card.Text>
                Cillum excepteur aliquip mollit nulla aute cillum et esse
                labore.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              width: "18rem",
              textAlign: "center",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
            }}
          >
            <Card.Img variant="top" height="165px" src={oceans3} />
            <Card.Body>
              <Card.Title>webDev Blog</Card.Title>
              <Card.Text>
                Cillum excepteur aliquip mollit nulla aute cillum et esse
                labore.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Jumbotron />
    <Container style={{ margin: "30px" }}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={7}>
          <img style={{ borderRadius: "10px" }} src={gor1} height={400} />
        </Col>
        <Col md={5}>
          <h2>Web Develop Blog</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic
          </p>
        </Col>
      </Row>
    </Container>
  </>
);
