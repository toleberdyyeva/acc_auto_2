import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const PageWallpaper = ({ image, children }) => {
  console.log(image);
  const res = () => {
    const place = "linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.50)),";
    return `${place} url("${image}")`;
  };
  return (
    <div style={{ backgroundImage: res() }} className="image-wrapper">
      <Container>
        <Row className="align-items-center" style={{ height: "85vh" }}>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};
