import axios from 'axios';
import { envs } from '../../../../../../config/envs';
import { TierData } from '../../../../commons/types/Tier';

const getTierData = async () => {
  try {
    const { data } = await axios.get<TierData[]>(
      `${envs.API_URL}/api/v1/tiers`
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting tier data');
  }
};

export default getTierData;
