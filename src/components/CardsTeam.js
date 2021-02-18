import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { API } from "../services";
import { CardTeam } from "./CardTeam";
import { LanguageText } from "../context";
import { Anime } from "./Anime";

export const CardsTeam = () => {
  const [cards, setCards] = useState(null);
  const loadCards = async () => {
    if (cards !== null) {
      return;
    }
    try {
      const { data } = await API.get("/team-members");
      const new_data = await data.map((item) => ({
        title: <LanguageText t={"name"} data={item} />,
        description: <LanguageText t={"quote"} data={item} />,
        subtitle: <LanguageText t={"position"} data={item} />,
        img: item.avatar.url,
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
              <Col xs={12} sm={4} key={`card-team-${index}`}>
                {/*{JSON.stringify(item)}*/}
                <Anime>
                  <CardTeam {...item} />
                </Anime>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
