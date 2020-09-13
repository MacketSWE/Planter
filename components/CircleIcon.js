import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/layout';

export function CircleIcon({image, style = null}) {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} resizeMode="contain" style={styles.image} />
    </View>
  );
}

const size = 50;
const imageSize = Math.floor(0.6 * size);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Math.floor(size / 2),
    height: size,
    justifyContent: 'center',
    width: size,
  },
  image: {
    height: imageSize,
    tintColor: 'white',
    width: imageSize,
  },
});
