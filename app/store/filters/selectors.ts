import {useAppSelector} from '../hooks/useAppSelector';

const useSelectedFilters = () =>
  useAppSelector(({filters: {selectedFilters}}) => selectedFilters);

const useFilters = () => useAppSelector(({filters: {filters}}) => filters);

const useCurrentPage = () =>
  useAppSelector(
    ({
      filters: {
        selectedFilters: {page},
      },
    }) => page,
  );

export {useFilters, useSelectedFilters, useCurrentPage};
