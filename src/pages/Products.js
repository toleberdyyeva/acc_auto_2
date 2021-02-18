import { PageWallpaper } from "../components/PageWallapper";
import { MediaLink } from "../context/media";
import React from "react";
import { LanguageText } from "../context";
import { Title } from "../components/title";
import { Cards } from "../components/Cards";
import { Welcome } from "../components/welcome";

export const Products = (props) => {
  return (
    <>
      <PageWallpaper image={MediaLink({ name: "products" })}>
        <div className="d-none d-md-block">
          <h1 class="font-weight-bolder display-2">
            <LanguageText t="Продукты" />
          </h1>
          <h3 class="font-weight-lighter">
            <LanguageText t="Продукты Описание" />
          </h3>
        </div>
        <div className="d-block d-md-none">
          <h1 className="font-weight-bolder">
            <LanguageText t="Продукты" />
          </h1>
          <h4 className="font-weight-lighter">
            <LanguageText t="Продукты Описание" />
          </h4>
        </div>
      </PageWallpaper>
      <Title t={"Продукты в ассортименте"} />
      <Cards />
      <Welcome />
    </>
  );
};
