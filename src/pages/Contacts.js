import { PageWallpaper } from "../components/PageWallapper";
import React from "react";
import { ContactForm } from "../components/ContactForm";
import { MediaLink } from "../context/media";
import { LanguageText } from "../context";
import { Container, Row, Col } from "react-bootstrap";

export const Contacts = (props) => {
  return (
    <>
      <PageWallpaper image={MediaLink({ name: "contacts" })}>
        <div className="d-none d-md-block">
          <h1 className="font-weight-bolder display-2">
            <LanguageText t="Контакты" />
          </h1>
          <h3 className="font-weight-lighter">
            <LanguageText t="Контакты Описание" />
          </h3>
        </div>
        <div className="d-block d-md-none">
          <h1 className="font-weight-bolder">
            <LanguageText t="Контакты" />
          </h1>
          <h4 className="font-weight-lighter">
            <LanguageText t="Контакты Описание" />
          </h4>
        </div>
      </PageWallpaper>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <h4 className="font-weight-light">
              <LanguageText t="Контакты Обратная связь" />
            </h4>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <ContactForm product={null} />
      <br />
      <br />
    </>
  );
};
