import {useAppSelector} from '../hooks/useAppSelector';

const useFavoritePersonages = () =>
  useAppSelector(({favorites: {favoritePersonages}}) => favoritePersonages);

const useFavoritePersonagesIds = () =>
  useAppSelector(
    ({favorites: {favoritePersonagesIds}}) => favoritePersonagesIds,
  );

export {useFavoritePersonages, useFavoritePersonagesIds};
