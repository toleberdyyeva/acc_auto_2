import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import * as Pages from "../pages";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet";
import { API } from "../services";
import { LanguageText } from "../context";

const PageLayout = (props) => {
  const { children, seo } = props;
  console.log(seo);

  const title = LanguageText({ t: "title", data: seo }).props.children;
  const description = LanguageText({ t: "description", data: seo }).props
    .children;
  return (
    <>
      {props.seo && (
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>
      )}
      <Navbar />
      <div style={{ minHeight: "80vh" }}>{children}</div>
      <Footer />
    </>
  );
};

const PageContainer = (props) => {
  console.log(props.seo);
  return (
    <PageLayout seo={props.seo}>
      <props.component {...props} />
    </PageLayout>
  );
};

export const Routes = (props) => {
  const loadPages = async () => {
    try {
      const { data } = await API.get("/seo-pages");
      return data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
  const [pages, setPages] = useState([
    {
      path: "/",
      comp: Pages.Home,
    },
    {
      path: "/products",
      comp: Pages.Products,
    },
    {
      path: "/products/:id/",
      comp: Pages.Product,
    },
    {
      path: "/about",
      comp: Pages.About,
    },
    {
      path: "/services",
      comp: Pages.Services,
    },
    {
      path: "/contacts",
      comp: Pages.Contacts,
    },
    {
      path: "",
      comp: Pages.NotFound,
    },
  ]);
  const [seo_fetched, setSeo] = useState(false);
  const collectPages = async () => {
    if (seo_fetched) {
      return;
    }
    const api_page = await loadPages();
    const new_pages = pages.map((item) => {
      const seo = api_page.find((p) => p.page_url === item.path);
      return {
        ...item,
        seo,
      };
    });
    await setSeo(true);
    await setPages(new_pages);
  };
  useEffect(() => {
    collectPages();
  });

  return (
    <React.Fragment>
      <Switch>
        {pages.map((page, index) => (
          <Route
            key={`page-${page.path}-${index}`}
            path={page.path}
            exact
            render={(props) => (
              <PageContainer {...props} component={page.comp} seo={page.seo} />
            )}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
};
