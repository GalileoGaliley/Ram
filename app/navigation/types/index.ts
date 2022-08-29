import type {RouteProp} from '@react-navigation/native';

type RootStackParamsList = {
  Tabs: undefined;
  CurrentPersonage: {
    id: string;
  };
};

type TabNavParamsList = {
  HomeTab: undefined;
  FavoritesTab: undefined;
  SettingTab: undefined;
};

type HomeScreenStackParamsList = {
  HomeScreen: undefined;
  CurrentPersonage: {
    id: string;
  };
};

type StackScreenOptions = {
  route: RouteProp<RootStackParamsList, keyof RootStackParamsList>;
  navigation: any;
};

type BaseNavigationOptionParams = {
  navigatorParams: StackScreenOptions;
  routeNames: Array<keyof RootStackParamsList>;
};
export type {
  RootStackParamsList,
  TabNavParamsList,
  HomeScreenStackParamsList,
  BaseNavigationOptionParams,
};
