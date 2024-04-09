import axios from 'axios';
import {getToken} from "./AuthService"
const BASE_REST_API_URL = 'http://localhost:8089/v1/api/pizza';


axios.interceptors.request.use(function (config){
    config.headers['Authorization']  = getToken();
    return config;
}, function(error) {
    return Promise.reject(error);
})


export const insertUser = () => axios.post(BASE_REST_API_URL + '/users/insert');
export const getUserById = (id) => axios.get(BASE_REST_API_URL  + '/' + id);

export const getAllPizza = () => axios.get(BASE_REST_API_URL);
export const savePizza = (pizza) => axios.post(BASE_REST_API_URL, pizza);
export const getPizzaById = (id) => axios.get(BASE_REST_API_URL + '/' + id);

export const insertImage = () => axios.post(BASE_REST_API_URL + '/images');
export const getImageById = (id) => axios.get(BASE_REST_API_URL + '/images/' + id);

export const createVenda = (venda) => axios.post(BASE_REST_API_URL + '/' + venda);






