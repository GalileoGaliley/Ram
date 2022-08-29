import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  useFavoritePersonages,
  useFavoritePersonagesIds,
} from '../store/favorites/selectors';
import PersonageItem from '../HomeScreen/components/PersonageItem';

const {width, height} = Dimensions.get('window');

export const FavoriteScreen = () => {
  const favoritesIds = useFavoritePersonagesIds();
  const favorites = useFavoritePersonages();

  const renderItem = ({item: id}: ListRenderItemInfo<string>) => {
    const personage = favorites[id];

    return (
      <PersonageItem
        isFavorite={true}
        item={personage}
        id={id}
        color={'#aaa'}
      />
    );
  };

  return (
    <View style={styles.container}>
      {favoritesIds.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={favoritesIds}
          refreshing={false}
          renderItem={renderItem}
          style={styles.list}
        />
      ) : (
        <Text style={{color: '#000', fontSize: 60}}>EMPTY!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
