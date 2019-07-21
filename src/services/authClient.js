import axios from 'axios';
import store from '../redux/store';

const defaultOptions = {
  baseURL: `${process.env.API_HOST}/${process.env.API_VERSION}`,
  headers: {
    Authorization: `Bearer ${store.getState().user.apiKey}`,
    'Content-Type': 'application/json',
  },
};

const authAxios = axios.create(defaultOptions);

export default authAxios;
