import { API } from "../services";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "./Icon";
import { Link } from "react-router-dom";
import { LanguageText } from "../context";
import { Anime } from "./Anime";
import { useLocation } from "react-router-dom";

export const ServicesCollection = ({ all = false }) => {
  const { pathname } = useLocation();
  const [services, setServices] = useState(null);
  const loadServices = async () => {
    if (services !== null) {
      return;
    }
    try {
      const { data } = await API.get("/services");
      console.log(data);
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
    <>
      <Container
        className="pr-3 pl-3"
        style={{
          padding: "120px 0px",
        }}
      >
        <Row>
          {services &&
            services.slice(0, all ? services.length : 3).map((item, index) => (
              <Col xs={12} sm={6} md={4} key={`service-item-${index}`}>
                <Anime>
                  <Row>
                    <Col className="col-3 text-center">
                      <div style={{ width: "80%" }}>
                        <Icon
                          src={
                            process.env.REACT_APP_BACKEND_API_URL +
                            item.icon.url
                          }
                        />
                      </div>
                    </Col>
                    <Col className="col-9">
                      <h3 className="font-weight-light">
                        <LanguageText t="title" data={item} />
                      </h3>
                      <p className="text-fade font-weight-lighter">
                        <LanguageText t="description" data={item} />
                      </p>
                      <br />
                      {pathname !== "/services" && (
                        <Link to={"/services"}>
                          <LanguageText t={"Подробнее"} />
                        </Link>
                      )}
                    </Col>
                  </Row>
                </Anime>
                <br />
                <br />
                <br />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
