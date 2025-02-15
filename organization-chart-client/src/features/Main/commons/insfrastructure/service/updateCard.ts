import axios from 'axios';
import { JobDataToUpdate } from '../../types/jobs';
import { envs } from '../../../../../config/envs';

const updateCard = async (jobId: number, payload: JobDataToUpdate) => {
  try {
    const { data } = await axios.put(
      `${envs.API_URL}/api/v1/job/${jobId}`,
      payload
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating card');
  }
};

export default updateCard;
