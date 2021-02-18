import React, { useContext } from "react";
import { Col, Row, Navbar, Container } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import { Logo } from "../Logo";
import { NavLink } from "react-router-dom";
import { ContentContext } from "../../context";

export const NavbarLayout = (props) => {
  const { userLanguageChange, userLanguage } = useContext(ContentContext);
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);
  const { links, changeLang } = props;
  return (
    <>
      <header className={`${styles.navbar}`}>
        <div className={styles.navbar_container}>
          <Row className={"align-items-baseline"}>
            <Col xs={12} sm={11}>
              <ul className={styles.navbar_rails + " no-scrollbar"}>
                <li style={{ marginRight: "40px" }}>
                  <div style={{ width: "90px" }}>
                    <Logo />
                  </div>
                </li>
                {links.map((link, index) => (
                  <li className={styles.link} key={`menu-link-${index}`}>
                    <NavLink
                      exact
                      to={link.path}
                      activeClassName={styles.active}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <select
                    style={{
                      color: "white",
                      background: "none",
                      width: "100%",
                    }}
                    onChange={handleLanguageChange}
                    value={userLanguage}
                    className="form-control form-control-sm d-sm-none"
                  >
                    {["kz", "ru", "en"].map((locale, index) => (
                      <option value={locale} key={`locale-mobile-${index}`}>
                        {locale.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>
            </Col>
            <Col sm={1} className="d-none d-sm-block">
              <select
                style={{
                  color: "white",
                  background: "none",
                  width: "100%",
                }}
                onChange={handleLanguageChange}
                value={userLanguage}
                className="form-control form-control-sm"
              >
                {["kz", "ru", "en"].map((locale, index) => (
                  <option value={locale} key={`locale-mobile-${index}`}>
                    {locale.toUpperCase()}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
};
