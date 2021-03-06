import { PageWallpaper } from "../components/PageWallapper";
import { MediaLink } from "../context/media";
import React, { useEffect, useState, ReactDOM, useContext } from "react";
import SliderImage from "react-zoom-slider";
import { ContentContext, LanguageText } from "../context";
import { Title } from "../components/title";
import { Cards } from "../components/Cards";
import { Welcome } from "../components/welcome";
import { Container, Row, Col } from "react-bootstrap";
import { API } from "../services";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { AccAccordion } from "../components/Accordion";
import { ContactForm } from "../components/ContactForm";

export const Product = () => {
  const { userLanguage } = useContext(ContentContext);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [specList, setSpecList] = useState(null);
  const [apply, setApply] = useState(false);

  const loadProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data);
      collectSpecList(data);
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  const collectSpecList = (data) => {
    if (data) {
      const spec_list = data.product_specs.map((item) => {
        let k = (t) => (userLanguage === "ru" ? t : `${t}_${userLanguage}`);
        return {
          title: item[k("title")],
          description: item[k("description")],
        };
      });
      setSpecList(spec_list);
    }
  };
  useEffect(() => {
    collectSpecList(product);
    console.log(userLanguage);
    if (product === null) {
      loadProduct();
    }
  }, [userLanguage]);
  const getDescription = () => {
    const res = LanguageText({ t: "description", data: product });
    return res.props.children;
    // console.log(typeof res);
    // return res.toString();
  };

  const images = () => {
    let res = null;
    if (product !== null) {
      res = [];
      res.push({
        image: process.env.REACT_APP_BACKEND_API_URL + product.image.url,
      });
      product.slider.map((item) => {
        res.push({ image: process.env.REACT_APP_BACKEND_API_URL + item.url });
      });
    }
    return res;
  };

  return (
    <>
      {product && (
        <>
          <Container>
            <Row style={{ paddingTop: "150px", paddingBottom: "50px" }}>
              <Col>
                <h3>{LanguageText({ t: "title", data: product })}</h3>
                <h6 className="text-primary font-weight-light">
                  {product.product_model}
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                {/*<img*/}
                {/*  src={*/}
                {/*    process.env.REACT_APP_BACKEND_API_URL + product.image.url*/}
                {/*  }*/}
                {/*  alt=""*/}
                {/*  width={"100%"}*/}
                {/*/>*/}
                {images() && (
                  <SliderImage
                    data={images()}
                    width={"100%"}
                    showDescription={false}
                  />
                )}
                <div style={{ paddingTop: "30px" }}>
                  <ReactMarkdown>{getDescription()}</ReactMarkdown>
                </div>
                <br />
                <br />
              </Col>
              <Col xs={12} md={4}>
                {specList && <AccAccordion list={specList} />}
              </Col>
            </Row>
            <Row>
              <Col>
                <br />
                <br />
                {!apply && (
                  <button
                    className="btn btn-primary"
                    onClick={() => setApply(true)}
                  >
                    {LanguageText({ t: "Оставить заявку" })}
                  </button>
                )}
                {apply && (
                  <h4 className="text-primary">
                    {LanguageText({ t: "Оставить заявку" })}
                  </h4>
                )}
                <br />
                <br />
              </Col>
            </Row>
          </Container>
          {apply && <ContactForm product={product} />}
        </>
      )}
      {/*<Welcome />*/}
    </>
  );
};
