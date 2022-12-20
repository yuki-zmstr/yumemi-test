import axios from "axios";

const instance = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    "X-API-KEY": process.env.API_KEY,
  },
});

function getPrefectures() {
  return instance({
    method: "GET",
    url: "/api/v1/prefectures",
  });
}

function getGraphs() {
  return instance({
    method: "GET",
    url: "api/v1/population/composition/perYear",
  });
}

export default getPrefectures;
