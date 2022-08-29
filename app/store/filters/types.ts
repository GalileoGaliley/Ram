type Filter = {
  status: string[];
  gender: string[];
};

type SelectedFilters = {
  status: string;
  gender: string;
  page: number;
};

type FilterState = {
  filters: Filter;
  selectedFilters: SelectedFilters;
};

export type {Filter, FilterState, SelectedFilters};
