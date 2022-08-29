import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useCurrentPage} from '../../store/filters/selectors';
import {usePagesCount} from '../../store/personage/selectors';
import {useDispatch} from 'react-redux';
import {setSelectedFilter} from '../../store/filters/slice';

const Pagination = () => {
  const dispatch = useDispatch();

  const currPage = useCurrentPage();

  const data = usePagesCount();

  const onPress = (page: number) => {
    dispatch(setSelectedFilter({page: page}));
  };

  const renderItem = ({item}: ListRenderItemInfo<number>) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress(item);
        }}
        style={{height: 40, width: 80}}>
        <Text
          style={{
            fontSize: 40,
            color: item === currPage ? '#ffcc00' : '#424242',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            textAlign: 'center',
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={true}
      horizontal={true}
      data={data}
      refreshing={false}
      renderItem={renderItem}
      style={{
        height: 40,
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#fff',
      }}
    />
  );
};

export default Pagination;
