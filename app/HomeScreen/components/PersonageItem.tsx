import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Heart, LikedHeart} from '../../Static/Icons';
// import {addToFavorite} from '../Func/base';
import {usePersonagesById} from '../../store/personage/selectors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  HomeScreenStackParamsList,
  RootStackParamsList,
} from '../../navigation/types';
import {Personage} from '../../store/personage/types';
import {useDispatch} from 'react-redux';
import {useFavoritePersonagesIds} from '../../store/favorites/selectors';
import {addFavorite, removeFavorite} from '../../store/favorites/actions';

type Props = {
  id: string;
  color: string;
  item: Personage;
  isFavorite: boolean;
};

const PersonageItem = ({id, item, color, isFavorite}: Props) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(isFavorite);
  const navigation =
    useNavigation<StackNavigationProp<HomeScreenStackParamsList>>();

  const addAndRemoveInFavorites = () => {
    if (favorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(item));
    }
    setFavorite(!favorite);
  };

  const onPress = () => {
    navigation.push('CurrentPersonage', {id: id});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: item.image.toString()}} />
      </TouchableOpacity>
      <View>
        <View style={styles.info}>
          <Text style={[{color: color}, styles.text]}>{item.name}</Text>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={addAndRemoveInFavorites}>
            {favorite ? <LikedHeart /> : <Heart />}
          </TouchableOpacity>
        </View>
        <Text style={{color: color}}>{item.status}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 300,
    margin: '5%',
    marginBottom: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  likeButton: {
    position: 'absolute',
    zIndex: 999999,
    right: 2,
  },
});
export default PersonageItem;
