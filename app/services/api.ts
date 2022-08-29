import Config from 'react-native-config';
import axios from 'axios';

const baseURL = Config.API_URL || 'https://rickandmortyapi.com/api/';

export const axiosInstance = axios.create({
  baseURL,
});
