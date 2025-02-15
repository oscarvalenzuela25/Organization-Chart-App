import { Candidate } from '../../../../types/jobs';
import { envs } from '../../../../../../../config/envs';
import axios from 'axios';

const updateUsers = async (jobId: number, usersSelected: Array<Candidate>) => {
  try {
    const { data } = await axios.put(
      `${envs.API_URL}/api/v1/job/${jobId}/users`,
      {
        usersSelected,
      }
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating users');
  }
};

export default updateUsers;
