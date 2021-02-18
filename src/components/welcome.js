import React from "react";
import { LanguageText } from "../context";
import { Container, Row, Col } from "react-bootstrap";
import { Anime } from "./Anime";
export const Welcome = () => {
  return (
    <>
      <Anime>
        <Container
          className="pr-3 pl-3"
          style={{
            padding: "80px 0px",
            borderTop: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <Row>
            <Col>
              <h3 className=" text-primary font-weight-light">
                <LanguageText t={"Добро пожаловать"} />
              </h3>
              <h4 className="font-weight-lighter mb-3">
                <LanguageText t={"Добро пожаловать Текст"} />
              </h4>
              <button className="btn btn-primary">
                <LanguageText t={"Добро пожаловать Кнопка"} />
              </button>
            </Col>
          </Row>
        </Container>
      </Anime>
    </>
  );
};
