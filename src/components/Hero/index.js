import React, { useEffect, useState } from "react";
// JSXo
import styles from "./Hero.module.scss";
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import { HeroNavbar } from "./navbar/navbar";
import { Row, Container, Col } from "react-bootstrap";
import { API } from "../../services";
import { LanguageText } from "../../context";
import { Link } from "react-router-dom";

// Images

export const Hero = () => {
  const [services, setServices] = useState(null);
  const loadServices = async () => {
    if (services !== null) {
      return;
    }
    try {
      const { data } = await API.get("/main-sliders");
      await setServices(data);
    } catch (e) {
      console.log(e);
      await setServices(null);
    }
  };
  useEffect(() => {
    if (services === null) {
      loadServices();
    }
  });
  return (
    <React.Fragment>
      <HeroSlider
        // slidingAnimation="top_to_bottom"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 8000,
          height: "85vh",
        }}
        inView
        isMobile={false}
      >
        <Container>
          {/*<HeroNavbar />*/}
          {services &&
            services.map((item, index) => (
              <Slide
                key={`slide-item-${index}`}
                // shouldRenderMask
                navDescription={item.product_model}
                background={{
                  backgroundColor: "#6D9B98",
                  backgroundImage:
                    process.env.REACT_APP_BACKEND_API_URL +
                    (item && item.image && item.image.url),
                  backgroundAnimation: "zoom",
                }}
                children={
                  <div className={styles.hero_cover}>
                    <div className={styles.cover}>
                      <Row
                        style={{ height: "80vh" }}
                        className="align-items-end align-items-sm-center"
                      >
                        <Col xs={12} sm={10}>
                          <div className="d-none d-lg-block">
                            <h3 className="display-2 font-weight-bolder">
                              <LanguageText data={item} t="title" />
                            </h3>
                            <h2 className="font-weight-lighter">
                              <LanguageText data={item} t="description" />
                            </h2>
                          </div>
                          <div className="d-block d-lg-none">
                            <h3 className="font-weight-bolder">
                              <LanguageText data={item} t="title" />
                            </h3>
                            <h5 className="font-weight-normal">
                              <LanguageText data={item} t="description" />
                            </h5>
                          </div>
                          {item.product && (
                            <Link
                              to={`/products/${item.product.id}`}
                              className="btn btn-primary"
                            >
                              <LanguageText t="Подробнее" />
                            </Link>
                          )}
                          <br />
                          <br />
                        </Col>
                      </Row>
                    </div>
                  </div>
                }
              />
            ))}
          <MenuNav />
        </Container>
      </HeroSlider>
    </React.Fragment>
  );
};
