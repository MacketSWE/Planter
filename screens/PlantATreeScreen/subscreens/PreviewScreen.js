import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../constants/layout';
import {DataRowItem} from '../../../components/DataRowItem';
import {mapTypeToImage} from '../../../models';

export function PreviewScreen({newTree}) {
  const {name, type, location, weight} = newTree;

  return (
    <>
      <Text style={styles.text}>PREVIEW</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Name</Text>
        <Text style={[styles.text, styles.detail]}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Type</Text>
        <Image
          resizeMode="contain"
          source={mapTypeToImage(type)}
          style={styles.image}
        />
      </View>
      {(location || weight) && (
        <>
          <Text style={[styles.text, styles.data]}>DATA</Text>
          {location && <DataRowItem data={location} />}
          {weight && <DataRowItem data={weight} />}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  data: {
    marginBottom: 10,
    marginTop: 60,
  },
  detail: {
    color: Colors.primary,
  },
  image: {
    height: 30,
    tintColor: Colors.primary,
    width: 30,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
  },
});
