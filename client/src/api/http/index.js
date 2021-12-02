import axios from 'axios';
import CONTANTS from '../../constants';
import Auth from './AuthApi';

const httpClient = axios.create({
  baseURL: CONTANTS.BASE_URL,
});

export const AuthAPI = new Auth(httpClient); 

export default httpClient;