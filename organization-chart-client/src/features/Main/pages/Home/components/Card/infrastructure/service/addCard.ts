import axios from 'axios';
import { envs } from '../../../../../../../../config/envs';
import { jobDataToCreated } from '../../../../../../commons/types/jobs';

const addCard = async (payload: jobDataToCreated) => {
  try {
    const { data } = await axios.post(`${envs.API_URL}/api/v1/job`, payload);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error adding job data');
  }
};

export default addCard;
