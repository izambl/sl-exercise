import axios from 'axios';
import store from '../redux/store';

const defaultOptions = {
  baseURL: 'http://127.0.0.1:3000', // @TODO Read from config for prod builds
  headers: {
    Authorization: `Bearer ${store.getState().user.apiKey}`,
    'Content-Type': 'application/json',
  },
};

const authAxios = axios.create(defaultOptions);

export default authAxios;
