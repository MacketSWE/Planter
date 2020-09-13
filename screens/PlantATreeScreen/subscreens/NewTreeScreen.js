import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ImageRadioButton} from '../../../components/ImageRadioButton';
import {Images} from '../../../constants/assets';

export function NewTreeScreen({newTree, setNewTree}) {
  function onChangeText(text) {
    const tree = {...newTree};
    tree.name = text;
    setNewTree(tree);
  }

  function onSelectedType(index) {
    const tree = {...newTree};
    tree.type = index;
    setNewTree(tree);
  }

  return (
    <>
      <Text style={styles.text}>ADD NAME</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Tree name"
        style={styles.textInput}
        value={newTree.name}
      />
      <Text style={styles.text}>CHOOSE A TYPE</Text>
      <View style={styles.buttons}>
        <ImageRadioButton
          image={Images.palmTree}
          onPress={() => onSelectedType(0)}
          selected={newTree.type === 0}
        />
        <ImageRadioButton
          image={Images.spurceTree}
          onPress={() => onSelectedType(1)}
          selected={newTree.type === 1}
        />
        <ImageRadioButton
          image={Images.leafTree}
          onPress={() => onSelectedType(2)}
          selected={newTree.type === 2}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
  },
  textInput: {
    borderRadius: 3,
    borderWidth: 1,
    marginBottom: 30,
    marginTop: 20,
    padding: 10,
  },
});
