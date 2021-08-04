import {CONFIG} from '../config';
import axios from 'axios';
import {Tresponse} from './type';

export const postContactInteraction = async (data: Tresponse) => {
  const response = await axios
    .get(`${CONFIG.BASE_URL}/records`)
    .then(response => {
      axios.post(`${CONFIG.BASE_URL}/records`, data);
    });

  return response;
};
