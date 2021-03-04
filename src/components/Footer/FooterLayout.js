import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import { LanguageText } from "../../context";
import { MediaLink } from "../../context/media";

export const ContactLinks = () => {
  const links = [
    {
      path: `tel:${LanguageText({ t: "Номер 1" }).props.children}`,
      title: <LanguageText t={"Номер 1"} />,
    },
    {
      path: `mailto:${LanguageText({ t: "Почта" }).props.children}`,
      title: <LanguageText t={"Почта"} />,
    },
    {
      path: `${MediaLink({ name: "2gis", url: true, home: false })}`,
      title: <LanguageText t={"Адрес"} />,
    },
  ];
  return (
    <>
      <h5 className="font-weight-light">
        <LanguageText t={"Контакты и почта"} />
      </h5>
      <ul className={styles.list_items}>
        {links.map((item, index) => (
          <li key={`link-item-index-${index}`}>
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export const FooterLayout = (props) => {
  return (
    <React.Fragment>
      <footer
        className=""
        style={{
          padding: "130px 0px",
          borderTop: "2px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="container">
          <div className="row mb60">
            <div className="col-md-4">
              <div className="">
                <h4 className="font-weight-light">
                  {LanguageText({ t: "Заголовок подвала" })}.
                </h4>
                <p className="text-fade">
                  {LanguageText({ t: "Текст подвала" })}.
                </p>
                <p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link to={"/about"}>Read more...</Link>
                </p>
                <br />
                <br />
              </div>
            </div>
            <div className="col-md-2">
              <div className="probootstrap-footer-widget probootstrap-link-wrap">
                <h5 className="font-weight-light">
                  <LanguageText t={"Ссылки"} />
                </h5>
                <ul className={styles.list_items}>
                  <li>
                    <NavLink to="/">
                      <LanguageText t={"Главная"} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">
                      <LanguageText t={"Продукты"} />{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">
                      <LanguageText t={"Услуги"} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      <LanguageText t={"О Компании"} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacts">
                      <LanguageText t={"Контакты"} />
                    </NavLink>
                  </li>
                </ul>
                <br />
                <br />
              </div>
            </div>
            <div className="col-md-3">
              <div className="probootstrap-footer-widget">
                <ContactLinks />
                <br />
                <br />
              </div>
            </div>
            <div className="col-md-3">
              <div className="probootstrap-footer-widget">
                <h5 className="font-weight-light font-">
                  <LanguageText t={"Соц сети"} />
                </h5>
                <ul className={styles.list_items}>
                  <li style={{ margin: "15px 0px" }}>
                    <a
                      className="mb-3"
                      href={MediaLink({
                        name: "instagram",
                        url: true,
                        home: false,
                      })}
                    >
                      <img
                        style={{
                          width: "30px",
                          margin: "-10px 10px 0px 0px",
                        }}
                        src={MediaLink({
                          name: "instagram",
                          url: false,
                          home: true,
                        })}
                        alt=""
                      />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={MediaLink({
                        name: "whatsapp",
                        url: true,
                        home: false,
                      })}
                    >
                      <img
                        style={{
                          width: "30px",
                          margin: "-10px 10px 0px 0px",
                        }}
                        src={MediaLink({
                          name: "whatsapp",
                          url: false,
                          home: true,
                        })}
                        alt=""
                      />
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <br />
              <br />
              <br />
              <p className="text-fade">
                ACC - khorgosauto.com © {new Date().getFullYear().toString()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
