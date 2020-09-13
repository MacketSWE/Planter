import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/layout';

export function ImageRadioButton({image, onPress, selected}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, selected && styles.selectedContainer]}>
      <Image
        source={image}
        resizeMode="contain"
        style={[styles.image, selected && styles.selectedImage]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    padding: 20,
  },
  image: {
    height: 60,
    tintColor: Colors.gray,
    width: 60,
  },
  selectedContainer: {
    borderColor: Colors.primary,
  },
  selectedImage: {
    tintColor: Colors.primary,
  },
});
