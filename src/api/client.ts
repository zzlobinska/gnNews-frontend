import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const ApiGet = (url: string, params?: object) => {
  const key = import.meta.env.VITE_API_KEY;

  const queryParams = {
    ...params,
    apiKey: key
  };
  
  const configs = { params: queryParams };
  return client.get(url, configs);
};

export default ApiGet;
