import styles from "./CardTeam.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { LanguageText } from "../../context";
export const CardTeam = (ctx) => {
  const { img, title, subtitle, description } = ctx;
  return (
    <>
      <div className={styles.card + " text-center"}>
        <div className={styles.image_container}>
          <div
            style={{
              margin: "0 auto",
              width: "65%",
            }}
          >
            <div
              className={`image-wrapper ${styles.image}`}
              style={{
                paddingTop: "100%",
                backgroundImage: `url('${process.env.REACT_APP_BACKEND_API_URL}${img}')`,
                borderRadius: "100%",
                filter: "grayscale(100%)",
              }}
            />
          </div>
          <div className="pr-3 pl-3">
            <br />
            <h3>{title}</h3>
            <h5 className="font-weight-light text-fade text-primary">
              {subtitle}
            </h5>
            <p className="text-fade font-weight-lighter">{description}</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};
