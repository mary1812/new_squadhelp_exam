import axios from 'axios';
import CONSTANTS from '../../constants';
import Auth from './AuthApi';

const httpClient = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});

export const AuthAPI = new Auth(httpClient); 

export default httpClient;