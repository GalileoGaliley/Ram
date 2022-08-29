import {Personage} from '../personage/types';

type FavoriteState = {
  favoritePersonagesIds: string[];
  favoritePersonages: Record<string, Personage>;
};

export type {FavoriteState, Personage};
