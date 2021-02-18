import styles from "./Card.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { LanguageText } from "../../context";
export const Card = (ctx) => {
  const { img, title, subtitle, model, id } = ctx;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <div
            className={`image-wrapper ${styles.image}`}
            style={{
              backgroundImage: `url('${process.env.REACT_APP_BACKEND_API_URL}${img}')`,
            }}
          />
        </div>
        <div className="pr-2 pl-2">
          <br />
          <h3 className="mb-1">{title}</h3>
          <h5 className="font-weight-light text-fade">{subtitle}</h5>
          <h6 className="font-weight-light text-fade">{model}</h6>
          {/*<p className="text-fade font-weight-lighter">{description}</p>*/}
          <Link to={`/products/${id}`}>
            <LanguageText t={"Подробнее"} />
          </Link>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
