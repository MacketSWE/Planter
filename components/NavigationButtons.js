import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from './Button';

export function NavigationButtons({
  activeScreen,
  newTree,
  pressedBack,
  pressedNext,
  pressedSubmit,
}) {
  return (
    <View style={styles.container}>
      <Button
        disabled={activeScreen === 0}
        onPress={pressedBack}
        type="previous"
      />
      {activeScreen < 2 ? (
        <Button onPress={pressedNext} type="next" />
      ) : (
        <Button
          onPress={pressedSubmit}
          style={styles.submitButton}
          type="submit"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  submitButton: {
    width: '60%',
  },
});
