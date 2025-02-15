import axios from 'axios';
import { Division } from '../../../../../../commons/types/jobs';
import { envs } from './../../../../../../../../config/envs';

const getDivisions = async () => {
  try {
    const { data } = await axios.get<Division[]>(
      `${envs.API_URL}/api/v1/divisions`
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting division data');
  }
};

export default getDivisions;
