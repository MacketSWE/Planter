import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/layout';
import {mapUnitIndexToString} from '../models';

export function DataRowItem({data}) {
  const isLocation = data.lat;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{isLocation ? 'Location' : 'Weight'}</Text>
        <Text style={styles.date}>
          {new Date(data.timestamp).toLocaleString()}
        </Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.detail}>
          {isLocation
            ? `${data.lat} Lat`
            : `${data.value} ${mapUnitIndexToString(data.unit)}`}
        </Text>
        {isLocation && <Text style={styles.detail}>{`${data.long} Lon`}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 15,
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  detail: {
    color: Colors.primary,
  },
  header: {
    fontWeight: 'bold',
  },
  textWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
