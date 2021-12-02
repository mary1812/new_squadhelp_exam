import axios from 'axios';
import CONTANTS from '../constants';
import history from '../browserHistory';

const httpClient = axios.create({
  baseURL: CONTANTS.BASE_URL,
});

let accessToken = null;

httpClient.interceptors.request.use((config) => {
  // const token = window.localStorage.getItem(CONTANTS.ACCESS_TOKEN);

  if (accessToken) {
    config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
  }
  return config;
}, (err) => Promise.reject(err));

httpClient.interceptors.response.use((response) => {
  console.log(response);
  if (response.data?.data?.tokenPair) {
    const {data: {data: {tokenPair: {refreshToken , accessToken: access}}}} =response;

    window.localStorage.setItem(CONTANTS.REFRESH_TOKEN, refreshToken );
    accessToken = access;
  }
  return response;
}, (err) => {
  if (err.response.status === 408 && history.location.pathname !== '/login' && history.location.pathname !== '/registration' && history.location.pathname !== '/') {
    history.replace('/login');
  }
  return Promise.reject(err);
});

export default httpClient;
