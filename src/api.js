import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    'X-API-KEY': process.env.API_KEY,
  },
});

export function getPrefectures() {
  return instance({
    method: 'GET',
    url: '/api/v1/prefectures',
  });
}

export function getPopulationData(prefcode) {
  return instance({
    method: 'GET',
    url: 'api/v1/population/composition/perYear',
    params: {
      prefCode: prefcode,
      cityCode: '-',
    },
  });
}
