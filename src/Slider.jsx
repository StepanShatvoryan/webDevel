import React from "react";
import { Carousel } from "react-bootstrap";
import priroda1 from "../src/images/priroda1.jpg";
import priroda2 from "../src/images/priroda2.jpg";
import priroda3 from "../src/images/priroda3.jpg";
import priroda4 from "../src/images/priroda4.jpg";


export function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "600px" }}>
          <img className="d-block w-100" src={priroda1} alt="First slide" />
          <Carousel.Caption>
            <h3>Web Developer Blok</h3>
            <p>lorem ipsum okeya</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={priroda2} alt="First slide" />
          <Carousel.Caption>
            <h3>Web Developer Blok</h3>
            <p>lorem ipsum okeya</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={priroda3} alt="First slide" />
          <Carousel.Caption>
            <h3>Web Developer Blok</h3>
            <p>lorem ipsum okeya</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={priroda4} alt="First slide" />
          <Carousel.Caption>
            <h3>Web Developer Blok</h3>
            <p>lorem ipsum okeya</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}
