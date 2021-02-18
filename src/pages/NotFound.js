import { MediaLink } from "../context/media";
import { LanguageText } from "../context";
import { PageWallpaper } from "../components/PageWallapper";
import React from "react";

export const NotFound = () => {
  return (
    <>
      <PageWallpaper image={MediaLink({ name: "services" })}>
        <h1 class="font-weight-bolder display-2">
          <LanguageText t="Услуги" />
        </h1>
        <h3 class="font-weight-lighter">
          <LanguageText t="Услуги Описание" />
        </h3>
      </PageWallpaper>
    </>
  );
};
