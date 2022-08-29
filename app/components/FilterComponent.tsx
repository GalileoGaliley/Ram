import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {useFilters, useSelectedFilters} from '../store/filters/selectors';
import {SelectedFilters} from '../store/filters/types';
import RadioInput from './RadioInput/RadioInput';
import {useDispatch} from 'react-redux';
import {setSelectedFilter} from '../store/filters/actions';
import {Heart, Info} from '../Static/Icons';

const FilterComponent = () => {
  const filterData = useFilters();
  const dispatch = useDispatch();
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const heightButton = 0;
  const animatedValue = useRef<Animated.Value>(
    new Animated.Value(heightButton),
  ).current;

  const openAndClose = () => {
    Animated.timing(animatedValue, {
      toValue: isOpen ? 0 : 400,
      duration: 700,
      useNativeDriver: false,
    }).start();
    setIsOpen(!isOpen);
  };
  const selectedFilters: SelectedFilters = {
    status: status,
    gender: gender,
    page: 1,
  };

  const submit = () => {
    dispatch(setSelectedFilter(selectedFilters));
    openAndClose();
  };

  const clearFilters = () => {
    setStatus('');
    setGender('');
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          openAndClose();
        }}>
        <Info width={60} height={60} />
      </TouchableOpacity>
      <Animated.View style={[styles.container, {height: animatedValue}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.filterItem}>
            <Text style={styles.textTitle}>Status</Text>
            <View>
              {filterData.status.map(item => (
                <RadioInput
                  name={item}
                  size={20}
                  color={'#aaa'}
                  callBack={setStatus}
                  activeName={status}
                />
              ))}
            </View>
          </View>
          <View style={styles.filterItem}>
            <Text style={styles.textTitle}>Gender</Text>
            <View>
              {filterData.gender.map(item => (
                <RadioInput
                  name={item}
                  size={20}
                  color={'#aaa'}
                  callBack={setGender}
                  activeName={gender}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonGo} onPress={submit}>
            <Text style={{fontSize: 30, color: '#fff'}}>Go!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonClear} onPress={clearFilters}>
            <Text style={{fontSize: 30, color: '#fff'}}>Clear!</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  textTitle: {
    marginBottom: 10,
    color: '#757575',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b9b9b9',
  },
  filterItem: {
    width: '50%',
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#eeeeee',
    borderTopWidth: 1,
  },
  buttonGo: {
    width: '60%',
    height: 40,
    position: 'absolute',
    backgroundColor: '#66709a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: -1,
    bottom: -100
  },
  buttonClear: {
    width: '60%',
    height: 40,
    position: 'absolute',
    backgroundColor: '#9a6666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: -1,
    bottom: -150
  },
});

export default FilterComponent;
