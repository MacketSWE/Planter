import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/layout';
import {Images} from '../constants/assets';

export function Button({disabled, onPress, type, style = null}) {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      onPress={!disabled ? onPress : null}
      style={[
        styles.container,
        type !== 'previous' && styles.containerFilled,
        disabled && styles.containerDisabled,
        style,
      ]}>
      {type !== 'previous' && (
        <Text style={[styles.text, styles.textNext]}>
          {type === 'next' ? 'Next' : 'Plant the tree'}
        </Text>
      )}
      {type !== 'submit' && (
        <Image
          resizeMode="contain"
          source={Images.arrow}
          style={[
            styles.image,
            type === 'previous' && styles.imagePrevious,
            disabled && styles.imageDisabled,
          ]}
        />
      )}
      {type === 'previous' && (
        <Text style={[styles.text, disabled && styles.textDisabled]}>
          Previous
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: 40,
    width: '33%',
  },
  containerFilled: {
    backgroundColor: Colors.primary,
  },
  containerDisabled: {
    borderColor: Colors.gray,
  },
  image: {
    height: 13,
    width: 13,
    tintColor: 'white',
  },
  imagePrevious: {
    tintColor: Colors.primary,
    transform: [{rotate: '180deg'}],
  },
  imageDisabled: {
    tintColor: Colors.gray,
  },
  text: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  textNext: {
    color: 'white',
  },
  textDisabled: {
    color: Colors.gray,
  },
});
