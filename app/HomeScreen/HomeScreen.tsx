import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchPersonagesAction} from '../store/personage/actions';

import {useSelectedFilters} from '../store/filters/selectors';
import PersonageList from './components/PersonageList';
import FilterComponent from '../components/FilterComponent';
import {usePersonagesLoading} from '../store/personage/selectors';
import Spinner from '../components/Spinner';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const filters = useSelectedFilters();
  const loading = usePersonagesLoading();

  useEffect(() => {
    dispatch(fetchPersonagesAction(filters));
  }, [filters]);

  return (
    <SafeAreaView style={styles.container}>
      <FilterComponent />

      {loading ? <Spinner /> : <PersonageList />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#444',
  },
});

export default HomeScreen;
