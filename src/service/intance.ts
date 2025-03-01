import axios from 'axios';
import {BASE_URL} from './urls';

const Client = axios.create();

Client.defaults.baseURL = BASE_URL;
/* Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
}; */

export default Client;