import axios from 'axios';
import { StorageHelper } from '../helpers';

export const Api = axios.create({ baseURL: 'http://192.168.1.77:3333/api' });

Api.interceptors.response.use(
  function (value) {
    return value;
  },
  function (error) {
    if (error.response.status === 401) {
      Promise.all([
        StorageHelper.removeItem('user'),
        StorageHelper.removeItem('token'),
      ]);
    }
    return Promise.reject(error);
  }
);

export function setBearerToken(token: string) {
  Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
