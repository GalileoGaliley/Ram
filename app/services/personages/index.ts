import {fetchPersonages} from './fetchPersonages';
import {Filter, SelectedFilters} from '../../store/filters/types';
import {fetchOnePersonage} from './fetchOnePersonage';

class PersonageServices {
  fetchPersonagesService = (params: SelectedFilters) => fetchPersonages(params);
  fetchOnePersonageService = (id: number) => fetchOnePersonage(id);
}
export const personageServices = new PersonageServices();
