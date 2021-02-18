import React, { useEffect, useState } from "react";
import { AccAccordion } from "./Accordion";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import { API } from "../services";
import { LanguageText } from "../context";
import { MediaLink } from "../context/media";
import { Anime } from "./Anime";

export const BusinessProcess = () => {
  const [services, setServices] = useState(null);
  const loadServices = async () => {
    if (services !== null) {
      return;
    }
    try {
      const { data } = await API.get("/infos");
      data.map((item) => ({
        title: <LanguageText data={item} t="title" />,
        description: <LanguageText data={item} t="description" />,
      }));
      await setServices(data);
    } catch (e) {
      console.log(e);
      await setServices([]);
    }
  };
  useEffect(() => {
    if (services === null) {
      loadServices();
    }
  });
  return (
    <Container
      className="pr-3 pl-3"
      style={{
        padding: "90px 0px",
        borderTop: "2px solid rgba(255,255,255,0.1)",
      }}
    >
      <Row>
        <Col xs={12} sm={6}>
          <Anime>
            <AccAccordion list={services} />
          </Anime>
          <br />
          <br />
        </Col>
        <Col xs={12} sm={6}>
          <Anime>
            <div
              style={{
                borderRadius: "8px",
                padding: "8px",
                border: "2px solid rgba(255,255,255,0.1)",
              }}
            >
              <ReactPlayer
                width={"100%"}
                height={300}
                controls={false}
                light={true}
                style={{ borderRadius: "10px" }}
                url={MediaLink({ name: "youtube", url: true, home: false })}
              />
            </div>
          </Anime>
        </Col>
      </Row>
    </Container>
  );
};
