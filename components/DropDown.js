import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../constants/assets';

export function DropDown({
  options,
  onSelectedItem,
  selectedItem,
  style = null,
}) {
  const [extended, setExtended] = useState(false);

  function selecedItem(index) {
    onSelectedItem(index);
    setExtended(false);
  }

  if (extended) {
    return (
      <View style={[styles.container, styles.extended, style]}>
        {options.map((option, index) => {
          return (
            <TouchableOpacity
              key={option}
              onPress={() => selecedItem(index)}
              style={styles.item}>
              <Text>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => setExtended(true)}
      style={[styles.container, style]}>
      <Text>{options[selectedItem]}</Text>
      <Image
        resizeMode="contain"
        source={Images.dropDownArrow}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  extended: {
    flexDirection: 'column',
  },
  image: {
    height: 8,
    width: 16,
  },
  item: {
    paddingVertical: 10,
    width: '100%',
  },
});
