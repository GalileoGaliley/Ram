import {Personage} from '../../store/personage/types';
import {axiosInstance as axios} from '../api';

const fetchOnePersonage = async (id: number): Promise<Personage> => {
  try {
    const {data} = await axios.get<Personage>(`/${id}`);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export {fetchOnePersonage};
