import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { API } from "../services";
import { ContactLinks } from "./Footer/FooterLayout";
import { LoadingIndicator } from "./Loader";
import { LanguageText } from "../context";

export const ContactForm = (props) => {
  const alert_text = LanguageText({ t: "Заявка отправлена" }).props.children;
  const [loading, setLoading] = useState(false);
  const formSubmitHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    const product = props.product
      ? `${props.product.title} ~ ${props.product.product_model}`
      : "N/A";

    const d = document;
    let data = {
      full_name:
        d.getElementById("fname").value + " " + d.getElementById("lname").value,
      phone_number: d.getElementById("phone").value,
      body: d.getElementById("message").value,
      email: d.getElementById("email").value,
    };

    data = {
      ...data,
      message: `
        Полное наименование - ${data.full_name}; 
        Номер телефона - ${data.phone_number}; 
        Email клиента - ${data.email};
        Текст письма - ${data.body};
        Выбранный продукт - ${product}
    `,
    };
    postOrder(data).then((res) => {
      alert(alert_text);
      setLoading(false);
    });
  };
  const postOrder = async (payload) => {
    try {
      return await API.post("/orders", { ...payload });
    } catch (e) {
      return e;
    }
  };

  // await alert(LanguageText({ t: "Заявка отправлена" }).props.children);
  // await setLoading(false);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            {loading && (
              <div
                className="text-center"
                style={{
                  padding: "100px",
                }}
              >
                <LoadingIndicator />
              </div>
            )}
            {!loading && (
              <div>
                <form
                  onSubmit={formSubmitHandle}
                  className="probootstrap-form mb60"
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="fname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          name="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          name="phone"
                        />
                      </div>
                    </div>{" "}
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      cols="30"
                      rows="5"
                      className="form-control"
                      id="message"
                      name="message"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </form>
                <br />
                <br />
              </div>
            )}
          </Col>
          <Col className="col-sm-3 d-none d-md-block">
            <ContactLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
};
