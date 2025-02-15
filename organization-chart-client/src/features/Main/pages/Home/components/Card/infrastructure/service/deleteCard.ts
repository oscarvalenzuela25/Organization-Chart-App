import axios from 'axios';
import { envs } from '../../../../../../../../config/envs';

const deleteCard = async (jobId: number) => {
  try {
    const { data } = await axios.delete(`${envs.API_URL}/api/v1/job/${jobId}`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting job data');
  }
};

export default deleteCard;
