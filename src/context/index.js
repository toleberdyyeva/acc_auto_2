import React, { createContext, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { API } from "../services";
import { LoadingIndicator } from "../components/Loader";
const context_default = {
  data: {},
  get: (key) => {
    return this.data;
  },
};

export const contextData = async () => {
  return {
    ...context_default,
    data: await collectContent(),
    t: (key) => {
      return key;
    },
    tAll: () => {
      return this.data;
    },
  };
};
const collectContent = async () => {
  const data = await loadContent();
  if (data) {
    return await normalize(data);
  } else {
    console.log("Error appeared");
  }
};

const normalize = (data) => {
  // console.log(data);
  let res = {};
  ["ru", "en", "kz"].map(async (lang) => {
    res[lang] = { translation: {} };
    data.map((content) => {
      // console.log(content);
      res[lang][content.slug] = content[lang];
      return null;
    });
    // console.log(res);
    return null;
  });
  return res;
};

const loadContent = async () => {
  try {
    return await API.get("/contents").then((res) => res.data);
  } catch (e) {
    return null;
  }
};

export const ContentContext = createContext(context_default);
const languageOptions = {
  kz: "kz",
  en: "en",
  ru: "ru",
};

export const ContentProvider = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem("lang");
  const [userLanguage, setUserLanguage] = React.useState(
    defaultLanguage || "ru"
  );
  const [dictionary, setDictionary] = React.useState(null);

  const load = async () => {
    const data = await collectContent();
    setTimeout(() => {
      setDictionary(data);
    }, 1400);
  };
  useEffect(() => {
    if (dictionary === null) {
      load();
    }
  });

  const provider = {
    userLanguage,
    dictionary,
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "ru";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("lang", newLanguage);
    },
    t: (key) => {
      return (
        dictionary && dictionary[userLanguage] && dictionary[userLanguage][key]
      );
    },
  };

  const loadingWrapper = () => {
    return (
      <Container>
        <Row style={{ height: "100vh" }} className="align-items-center">
          <Col className="text-center">
            <LoadingIndicator />
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <ContentContext.Provider value={provider}>
      {/*{JSON.stringify(dictionary)}*/}
      {dictionary ? children : loadingWrapper()}
    </ContentContext.Provider>
  );
};

export const LanguageText = ({ t, data = null }) => {
  const { userLanguage, dictionary } = React.useContext(ContentContext);
  const refactor = () => {
    let result = "---";
    if (data) {
      const is_rus = userLanguage === "ru";
      if (is_rus) {
        if (data[t] === undefined) {
          return data[`${t}_${userLanguage}`];
        }
        return data[t];
      }
      return data[`${t}_${userLanguage}`];
    }
    return dictionary[userLanguage][t] || t;
  };

  return <React.Fragment>{refactor()}</React.Fragment>;
};
