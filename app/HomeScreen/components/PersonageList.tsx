import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  ListRenderItemInfo,
  FlatList,
} from 'react-native';
import PersonageItem from './PersonageItem';
import {usePersonages, usePersonagesIds} from '../../store/personage/selectors';
import Pagination from './Pagination';
import {useFavoritePersonagesIds} from '../../store/favorites/selectors';

const {width, height} = Dimensions.get('window');

const PersonageList = () => {
  const personagesIds = usePersonagesIds();
  const personages = usePersonages();
  const favoritesIds = useFavoritePersonagesIds();

  const renderItem = ({item: id}: ListRenderItemInfo<string>) => {
    const personage = personages[id];
    const isFavorite = favoritesIds.includes(id, 0);
    return (
      <PersonageItem
        item={personage}
        id={id}
        color={'#aaa'}
        isFavorite={isFavorite}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={personagesIds}
        refreshing={false}
        renderItem={renderItem}
        style={styles.list}
      />
      <Pagination />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#fff',
    flex: 1,
  },
  list: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 15,
    height: height - 120,
    width: width,
  },
});

export default PersonageList;
