import axios from 'axios';
import CONFIG from './config';

const api = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 3000,
});

export class HTTP {
  static HEADERS = { 'Content-Type': 'application/json' };

  static async get(url: string) {
    try {
      return await request(url, 'get', {});
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async post(url: string, data = {}) {
    try {
      return await request(url, 'post', data);
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(url: string) {
    try {
      return await request(url, 'delete', {});
    } catch (e) {
      console.log(e);
    }
  }

  static async patch(url: string, data = {}) {
    try {
      return await request(url, 'patch', data);
    } catch (e) {
      console.log(e);
    }
  }
}

async function request(url: string, methodName: string, data: {}) {
  const methods = new Map([
    ['post', api.post],
    ['get', api.get],
    ['patch', api.patch],
    ['delete', api.delete],
  ]);

  const method = methods.get(methodName);

  const config = {
    headers: HTTP.HEADERS,
    body: '',
  };

  if (methodName === 'post' || methodName === 'patch') {
    config.body = JSON.stringify(data);
  }
  if (method) {
    return await method(url, config);
  } else {
    return null;
  }
}
