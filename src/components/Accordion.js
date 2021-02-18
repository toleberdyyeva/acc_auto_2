import React, { useContext } from "react";
import PlusIcon from "../assets/icons/plus.png";
import MinusIcon from "../assets/icons/minus.png";
import {
  Col,
  Row,
  Accordion,
  AccordionContext,
  Card,
  useAccordionToggle,
} from "react-bootstrap";
import { Icon } from "./Icon";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Row
      className={`acc_accordion_card pb-3 ${
        isCurrentEventKey ? "active" : null
      }`}
    >
      <Col xs={10}>
        <p
          className={{ fade: isCurrentEventKey }}
          onClick={decoratedOnClick}
          style={{ margin: 0 }}
        >
          {children}
        </p>
      </Col>
      <Col xs={2} className="text-right">
        <div
          style={{ float: "right", width: "25px" }}
          className="d-none d-md-block"
        >
          <Icon
            src={isCurrentEventKey ? MinusIcon : PlusIcon}
            className="acc_accordion_icon"
          />
        </div>
        <div
          style={{ float: "right", width: "25px" }}
          className="d-block d-md-none"
        >
          <Icon
            src={isCurrentEventKey ? MinusIcon : PlusIcon}
            className="acc_accordion_icon"
          />
        </div>
      </Col>
    </Row>
  );
};

export const AccAccordion = ({ list }) => {
  return (
    <Accordion defaultActiveKey={1}>
      {list &&
        list.map((item, index) => (
          <Card key={`AccAccordion-item-${index}`}>
            <Card.Header>
              <ContextAwareToggle eventKey={index + 1}>
                <p className="font-weight-normal">{item.title}</p>
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index + 1}>
              <Card.Body>
                <p className="text-fade font-weight-light">
                  {item.description}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
    </Accordion>
  );
};
