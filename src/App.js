import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import { ContentProvider, contextData } from "./context";
import { MediaProvider } from "./context/media";
import { useLocation } from "react-router";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export const App = () => {
  return (
    <>
      <ContentProvider>
        <MediaProvider>
          <Router>
            <ScrollToTop />
            <Routes />
          </Router>
        </MediaProvider>
      </ContentProvider>
    </>
  );
};
