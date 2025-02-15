import axios from 'axios';
import { envs } from '../../../../../../../../config/envs';
import { TierDataToUpdate } from '../../../../../../commons/types/Tier';

const updateTier = async (tierId: number, payload: TierDataToUpdate) => {
  try {
    const { data } = await axios.put(
      `${envs.API_URL}/api/v1/tier/${tierId}`,
      payload
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating tier');
  }
};

export default updateTier;
