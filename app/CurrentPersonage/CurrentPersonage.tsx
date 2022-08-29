import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {usePersonagesById} from '../store/personage/selectors';
import {HomeScreenStackParamsList} from '../navigation/types';

const CurrentPersonage = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<HomeScreenStackParamsList, 'CurrentPersonage'>>();

  const personage = usePersonagesById(id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://rickandmortyapi.com/api/character/avatar/${personage.id}.jpeg`,
          }}
        />
      </View>
      <View style={styles.info}>
        <View style={{width: '100%'}}>
          <View style={styles.infoList}>
            <Text style={styles.infoItem}>Name: {personage.name}</Text>
            <Text style={styles.infoItem}>Status: {personage.status}</Text>
            <Text style={styles.infoItem}>Gender: {personage.gender}</Text>
            <Text style={styles.infoItem}>From: {personage.origin.name}</Text>
            <Text style={styles.infoItem}>
              Lives in: {personage.location.name}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 0,
  },
  imageContainer: {
    width: '100%',
    height: 600,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '100%',
    marginTop: 30,
  },
  info: {
    width: '90%',
    margin: '5%',
    marginTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
  },
  infoList: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#b9b9b9',
  },
  infoItem: {
    fontSize: 27,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CurrentPersonage;
