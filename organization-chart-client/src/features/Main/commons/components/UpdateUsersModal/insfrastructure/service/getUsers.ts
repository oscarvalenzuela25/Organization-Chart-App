import axios from 'axios';
import { Candidate } from '../../../../types/jobs';
import { envs } from '../../../../../../../config/envs';

const getUsers = async () => {
  try {
    const { data } = await axios.get<Candidate[]>(
      `${envs.API_URL}/api/v1/users`
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting users');
  }
};

export default getUsers;
