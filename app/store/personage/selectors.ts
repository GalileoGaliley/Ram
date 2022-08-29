import {useAppSelector} from '../hooks/useAppSelector';

const usePersonages = () =>
  useAppSelector(({personages: {personages}}) => personages);

const usePersonagesById = (id: string) =>
  useAppSelector(({personages: {personages}}) => personages[id]);

const usePersonagesIds = () =>
  useAppSelector(({personages: {personagesIds}}) => personagesIds);

const usePersonagesLoading = () =>
  useAppSelector(({personages: {loading}}) => loading);

const usePagesCount = () =>
  useAppSelector(
    ({
      personages: {
        info: {pages},
      },
    }) => pages,
  );

export {
  usePersonages,
  usePersonagesLoading,
  usePersonagesIds,
  usePersonagesById,
  usePagesCount,
};
