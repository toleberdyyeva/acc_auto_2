import React, { useContext, useState } from "react";
import { NavbarLayout } from "./NavbarLayout";
import { ContentContext } from "../../context";
import { LanguageText } from "../../context";

export const NavbarContainer = (props) => {
  const { t } = useContext(ContentContext);
  // const { t, i18n } = useTranslation();
  const [links, setLinks] = useState([
    { path: "/", title: <LanguageText t={"Главная"} /> },
    { path: "/products", title: <LanguageText t={"Продукты"} /> },
    { path: "/services", title: <LanguageText t={"Услуги"} /> },
    { path: "/about", title: <LanguageText t={"О Компании"} /> },
    { path: "/contacts", title: <LanguageText t={"Контакты"} /> },
  ]);
  return (
    <React.Fragment>
      <NavbarLayout links={links} />
    </React.Fragment>
  );
};
