import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {CircleIcon} from './CircleIcon';
import {Colors} from '../constants/layout';
import {mapTypeToImage} from '../models';

export function TreeListItem({data}) {
  return (
    <View style={styles.container}>
      <CircleIcon image={mapTypeToImage(data.type)} />
      <Text style={styles.nameText}>{data.name}</Text>
      <Text style={styles.dateText}>
        {new Date(data.timestamp).toLocaleString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },
  dateText: {
    flex: 1,
    opacity: 0.4,
    textAlign: 'right',
  },
  nameText: {
    color: Colors.primary,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
