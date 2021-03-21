import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=995f97b1';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`;
        return axiosInstance.get(query) // 'http://www.omdbapi.com?apikey=995f97b1&s='
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
