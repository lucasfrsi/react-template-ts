import axios from 'axios';

const DEFAULT_TIMEOUT = 5000;

const pokeAPIClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: DEFAULT_TIMEOUT,
});

export default pokeAPIClient;
