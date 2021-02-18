import { PageWallpaper } from "../components/PageWallapper";
import { MediaLink } from "../context/media";
import React, { useEffect, useState } from "react";
import { LanguageText } from "../context";
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
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [apply, setApply] = useState(false);

  const loadProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data);
      console.log(data);
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  useEffect(() => {
    if (product === null) {
      loadProduct();
    }
  });
  const getSpecList = () => {
    if (product === null) {
      return [];
    }
    return product.product_specs.map((item) => {
      return {
        title: LanguageText({ t: "title", data: item }),
        description: LanguageText({ t: "description", data: item }),
      };
    });
  };
  const getDescription = () => {
    const res = LanguageText({ t: "description", data: product });
    return res.props.children;
    // console.log(typeof res);
    // return res.toString();
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
                <img
                  src={
                    process.env.REACT_APP_BACKEND_API_URL + product.image.url
                  }
                  alt=""
                  width={"100%"}
                />
                <div style={{ paddingTop: "30px" }}>
                  <ReactMarkdown>{getDescription()}</ReactMarkdown>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <AccAccordion list={getSpecList()} />
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
      <Welcome />
    </>
  );
};
