const axios = require("axios");
require("dotenv").config();
const fs = require("fs");
const configs = require("./configs");
const DATA_TYPE_HEADER_KEY = configs.keys.model_type_header;
// ------------------------------------------------------------------------------------------
const fetchData = async () => {
  const loaded_data = await loadData();
  const normalized_data = await normalizeData(loaded_data);
  return {
    data: normalized_data,
  };
};
// ------------------------------------------------------------------------------------------
const normalizeData = (data) => {
  const result = {};
  data.map((item) => {
    const { config, data } = item;
    const key = config.headers[DATA_TYPE_HEADER_KEY];
    result[key] = data;
  });
  return result;
};

// ------------------------------------------------------------------------------------------
const loadData = async (configs) => {
  try {
    return (await Promise.all(configs)) || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
// ------------------------------------------------------------------------------------------
const collectRequests = (data_config) => {
  return Object.entries(data_config).map(async (item) => {
    const { url, method } = item[1];
    let headers = {};
    headers[DATA_TYPE_HEADER_KEY] = item[0];
    return await prepareDataRequest({
      url,
      method,
      headers,
    });
  });
};
// ------------------------------------------------------------------------------------------
const prepareDataRequest = async (axios_props) =>
  await axios({
    baseURL: process.env.REACT_APP_BACKEND_API_URL,
    ...axios_props,
  });
// ------------------------------------------------------------------------------------------
const startLoading = async () => {
  const data = await fetchData();
  console.log(data);
};
// ------------------------------------------------------------------------------------------
startLoading().then((r) => {});
