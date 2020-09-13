import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {CircleIcon} from './CircleIcon';
import {HorizontalRuler} from './HorizontalRuler';
import {Images} from '../constants/assets';

export function PageHeader({activeScreen}) {
  const data = pageData[activeScreen];
  const {header, text, image, progress} = data;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CircleIcon image={image} style={styles.icon} />
        <View>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <HorizontalRuler progress={progress} />
    </View>
  );
}

const pageData = [
  {
    header: 'STEP 1/3',
    text: 'Choose tree type',
    image: Images.spurceTree,
    progress: '33%',
  },
  {
    header: 'STEP 2/3',
    text: 'Add tree information',
    image: Images.information,
    progress: '66%',
  },
  {
    header: 'STEP 3/3',
    text: 'Plant tree',
    image: Images.mountain,
    progress: '100%',
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  header: {
    opacity: 0.5,
  },
  icon: {
    margin: 10,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
  },
});
