import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import * as Pages from "../pages";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet";
import { API } from "../services";

const PageLayout = (props) => {
  const { children, seo } = props;
  return (
    <>
      {props.seo && (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Helmet>
      )}
      <Navbar />
      <div style={{ minHeight: "80vh" }}>{children}</div>
      <Footer />
    </>
  );
};

const PageContainer = (props) => {
  return (
    <PageLayout seo={props.seo}>
      <props.component {...props} />
    </PageLayout>
  );
};

export const Routes = (props) => {
  // const loadPages = async () => {
  //   try {
  //     const { data } = await API.get("/seo-pages");
  //     return data;
  //   } catch (e) {
  //     console.log(e);
  //     return {};
  //   }
  // };
  // const collectPages = async () => {
  //   const api_pages = await loadPages();
  //   console.log(api_pages);
  //   return [];
  // };

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

  useEffect(() => {});

  return (
    <React.Fragment>
      <Switch>
        {pages.map((page, index) => (
          <Route
            key={`page-${page.path}-${index}`}
            path={page.path}
            exact
            render={(props) => (
              <PageContainer
                {...props}
                component={page.comp}
                seo={page.seo_data}
              />
            )}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
};
