import { create } from "apisauce";
import cache from "../utility/cache";
import storage from "../auth/storage";

const apiClient = create({
  baseURL: "https://node-ecommerce-pd0c.onrender.com/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await storage.getToken();
  if (authToken) {
    request.headers["x-auth-token"] = authToken;
  }

  // ✅ Dynamically set Content-Type
  if (request.data instanceof FormData) {
    request.headers["Content-Type"] = "multipart/form-data";
  } else {
    request.headers["Content-Type"] = "application/json";
  }
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
/*import axios from 'axios';
import storage from './storage'; // assure-toi que cette fonction existe et retourne le token

// 1. Créer une instance Axios
const apiClient = axios.create({
  baseURL: 'https://node-ecommerce-pd0c.onrender.com/api',
});

// 2. Ajouter un intercepteur de requêtes
apiClient.interceptors.request.use(async (config) => {
  const authToken = await storage.getToken();

  if (authToken) {
    config.headers['x-auth-token'] = authToken;
  }

  // ✅ Définir dynamiquement Content-Type
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
*/