const axios = require("axios");
require("dotenv").config();
const fs = require("fs");

// ----------------------------------------------------------------
const request = async () => {
  try {
    return await axios
      .get(`${process.env.REACT_APP_BACKEND_API_URL}/contents`)
      .then((res) => res.data);
  } catch (e) {
    // console.log(e);
    return null;
  }
};
// ----------------------------------------------------------------
const save = async (data) => {
  // console.log(data);
  await fs.writeFile(
    `./src/i18n/locales/translations.json`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    }
  );
};
// ----------------------------------------------------------------
const normalize = (data) => {
  // console.log(data);
  let res = {};
  ["ru", "en", "kz"].map(async (lang) => {
    res[lang] = { translation: {} };
    data.map((content) => {
      // console.log(content);
      res[lang]["translation"][content.slug] = content[lang];
      return null;
    });
    // console.log(res);
    return null;
  });
  return res;
};
// ----------------------------------------------------------------
const fetch = async () => {
  const data = await request();
  if (data) {
    const normal_data = await normalize(data);
    console.log(normal_data);
    await save(normal_data);
  } else {
    console.log("Error loading content resources");
  }
};
// ----------------------------------------------------------------
fetch().then((res) => {
  // console.log("Content fetched");
});
