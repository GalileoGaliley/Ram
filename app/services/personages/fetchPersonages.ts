import {Filter, SelectedFilters} from '../../store/filters/types';
import {PersonagesResponse} from '../../store/personage/types';
import {axiosInstance as axios} from '../api';

const fetchPersonages = async ({
  gender,
  status,
  page,
}: SelectedFilters): Promise<PersonagesResponse> => {
  try {
    const {data} = await axios.get<PersonagesResponse>('character', {
      params: {
        page,
        status,
        gender,
      },
    });
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export {fetchPersonages};
