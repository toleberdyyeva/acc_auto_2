import { Container, Col, Row } from "react-bootstrap";
import { LanguageText } from "../context";
import React from "react";

export const Title = ({ t }) => {
  return (
    <>
      <Container className="pr-3 pl-3" style={{ marginTop: "40px" }}>
        <Row>
          <Col>
            <h2 className="font-weight-light">
              <LanguageText t={t} />
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};
