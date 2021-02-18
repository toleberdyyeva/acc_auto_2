import React from "react";
import { Switch, Route } from "react-router";
import * as Pages from "../pages";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const pages = [
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
];

const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>{children}</div>
      <Footer />
    </>
  );
};

const PageContainer = (props) => {
  return (
    <PageLayout>
      <props.component {...props} />
    </PageLayout>
  );
};

export const Routes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        {pages.map((page, index) => (
          <Route
            key={`page-${page.path}-${index}`}
            path={page.path}
            exact
            render={(props) => (
              <PageContainer {...props} component={page.comp} />
            )}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
};
