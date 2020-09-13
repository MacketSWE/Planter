import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';
import {TreeListItem} from '../components/TreeListItem';

export function AllTreesScreen() {
  const {trees} = useSelector((state) => state);

  return (
    <FlatList
      data={trees}
      keyExtractor={(item) => item.id}
      renderItem={({item: data}) => <TreeListItem data={data} />}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
