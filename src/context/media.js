import React, { useContext, useEffect } from "react";
import { API } from "../services";

export const MediaContext = React.createContext({});
const loadContent = async () => {
  try {
    return await API.get("/media-collections").then((res) => res.data);
  } catch (e) {
    return null;
  }
};
const collectContent = async () => {
  const data = await loadContent();
  if (data) {
    return Object.fromEntries(data.map((item) => [item.name, item]));
  } else {
    console.log("Error appeared");
  }
};

export const MediaProvider = ({ children }) => {
  const [media, setMedia] = React.useState(null);

  const load = async () => {
    const data = await collectContent();
    setTimeout(() => {
      setMedia(data);
    }, 1400);
  };

  useEffect(() => {
    if (media === null) {
      load();
    }
  });
  return (
    <>
      <MediaContext.Provider value={media}>{children}</MediaContext.Provider>
    </>
  );
};

export const MediaLink = ({ name, url = false, home = true }) => {
  const media = useContext(MediaContext);
  const resolver = () => {
    if (media) {
      const data = media[name];
      if (data !== undefined) {
        if (url) {
          return home
            ? process.env.REACT_APP_BACKEND_API_URL + data.url
            : data.url;
        } else {
          return home
            ? process.env.REACT_APP_BACKEND_API_URL + data.image.url
            : data.image.url;
        }
      }
    }
    return "";
  };
  return resolver();
};
