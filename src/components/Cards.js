import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { API } from "../services";
import { Card } from "./Card";
import { LanguageText } from "../context";
import { Anime } from "./Anime";

export const Cards = () => {
  const [cards, setCards] = useState(null);
  const loadCards = async () => {
    if (cards !== null) {
      return;
    }
    try {
      const { data } = await API.get("/products");
      const new_data = await data.map((item) => ({
        id: item.id,
        title: <LanguageText t={"title"} data={item} />,
        description: <LanguageText t={"description"} data={item} />,
        subtitle: <LanguageText t={"subtitle"} data={item} />,
        model: item.product_model,
        img: item.image.url,
      }));
      console.log(new_data);
      await setCards(new_data);
    } catch (e) {
      console.log(e);
      await setCards([]);
    }
  };
  useEffect(() => {
    if (cards === null) {
      loadCards();
    }
  });
  return (
    <>
      <Container className="pr-3 pl-3" style={{ padding: "40px 0px" }}>
        {/*{JSON.stringify(cards)}*/}
        <Row>
          {cards &&
            cards.map((item, index) => (
              <Col xs={12} sm={6} md={4} key={`card-product-${index}`}>
                {/*{JSON.stringify(item)}*/}
                <Anime>
                  <Card {...item} />
                </Anime>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
