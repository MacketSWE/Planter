import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Colors} from '../../../constants/layout';
import {DataRowItem} from '../../../components/DataRowItem';
import {DropDown} from '../../../components/DropDown';
import {Images} from '../../../constants/assets';

export function DetailsScreen({newTree, setNewTree}) {
  const [category, setCategory] = useState(0);
  const [unit, setUnit] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weight, setWeight] = useState('');

  function getCurrentPosition() {
    Geolocation.getCurrentPosition((info) => {
      if (info.coords) {
        const {latitude: lat, longitude: lng} = info.coords;
        setLatitude(`${lat}`);
        setLongitude(`${lng}`);
      }
    });
  }

  function addLocation() {
    if (!latitude || !longitude) {
      return null;
    }
    const tree = {...newTree};
    tree.location = {
      lat: latitude,
      long: longitude,
      timestamp: new Date().getTime(),
    };
    setNewTree(tree);
  }

  function addWeight() {
    if (!weight) {
      return null;
    }
    const tree = {...newTree};
    tree.weight = {
      value: weight,
      unit,
      timestamp: new Date().getTime(),
    };
    setNewTree(tree);
  }

  function pressedAddData() {
    category === 0 ? addLocation() : addWeight();
  }

  return (
    <>
      <Text style={styles.text}>ADD DATA</Text>
      <DropDown
        options={['Location', 'Weight']}
        selectedItem={category}
        style={styles.dropDown}
        onSelectedItem={setCategory}
      />
      {category === 0 ? (
        <View>
          <View style={styles.locationWrapper}>
            <TextInput
              keyboardType="decimal-pad"
              onChangeText={setLatitude}
              placeholder="Latitude"
              style={styles.textInput}
              value={latitude}
            />
            <TextInput
              keyboardType="decimal-pad"
              onChangeText={setLongitude}
              placeholder="Longitude"
              style={styles.textInput}
              value={longitude}
            />
          </View>
          <TouchableOpacity
            onPress={getCurrentPosition}
            style={styles.locationButton}>
            <Text>Get my position</Text>
            <Image
              resizeMode="contain"
              source={Images.locationPin}
              style={styles.locationImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.locationWrapper}>
            <TextInput
              keyboardType="decimal-pad"
              onChangeText={setWeight}
              placeholder="Value"
              style={[styles.textInput, styles.weightInput]}
              value={weight}
            />
            <DropDown
              options={['Kg', 'grams']}
              selectedItem={unit}
              onSelectedItem={setUnit}
              style={styles.weightUnitDropDown}
            />
          </View>
        </View>
      )}
      <TouchableOpacity onPress={pressedAddData} style={styles.addDataButton}>
        <Text style={styles.addDataText}>Add data</Text>
      </TouchableOpacity>
      {newTree.location && <DataRowItem data={newTree.location} />}
      {newTree.weight && <DataRowItem data={newTree.weight} />}
    </>
  );
}

const styles = StyleSheet.create({
  addDataButton: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginVertical: 20,
    padding: 10,
  },
  addDataText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dropDown: {
    marginBottom: 10,
  },
  locationButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 10,
  },
  locationImage: {
    height: 20,
    marginLeft: 5,
    width: 10,
  },
  locationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 3,
    borderWidth: 1,
    padding: 10,
    width: '48%',
  },
  weightInput: {
    width: '70%',
  },
  weightUnitDropDown: {
    width: '27%',
  },
});
