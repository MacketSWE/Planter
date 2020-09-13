import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../constants/layout';

export function HorizontalRuler({progress: width = '50%'}) {
  return (
    <View style={styles.container}>
      <View style={[styles.filled, {width}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    height: 3,
    width: '100%',
  },
  filled: {
    backgroundColor: Colors.primary,
    height: 3,
  },
});
