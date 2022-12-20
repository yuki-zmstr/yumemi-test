import axios from "axios";

const instance = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    "X-API-KEY": process.env.API_KEY,
  },
});

async function stockTimeSeries(symbol) {
  return instance({
    method: "GET",
    url: "/api/v1/prefectures",
    // params: {
    //   outputsize: "compact",
    //   datatype: "json",
    //   function: "TIME_SERIES_DAILY_ADJUSTED",
    //   symbol: symbol.toUpperCase(),
    // },
    // transformResponse: [
    //   function (data) {
    //     console.log("Transforming data...");
    //     const json = JSON.parse(data);
    //     console.log(json);
    //     const dates = Object.keys(json["Time Series (Daily)"]).reverse();

    //     const closePrices = dates.map(
    //       (date) =>
    //         (date = {
    //           date,
    //           close: Number(json["Time Series (Daily)"][date]["4. close"]),
    //         })
    //     );
    //     const symbol = json["Meta Data"]["2. Symbol"];
    //     const refreshed = json["Meta Data"]["3. Last Refreshed"];

    //     data = {
    //       symbol,
    //       refreshed,
    //       closePrices,
    //     };

    //     return data;
    //   },
    // ],
  });
}

export default stockTimeSeries;
