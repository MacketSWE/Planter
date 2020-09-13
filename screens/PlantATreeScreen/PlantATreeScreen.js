import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {DetailsScreen} from './subscreens/DetailsScreen';
import {NavigationButtons} from '../../components/NavigationButtons';
import {NewTreeScreen} from './subscreens/NewTreeScreen';
import {PageHeader} from '../../components/PageHeader';
import {PreviewScreen} from './subscreens/PreviewScreen';
import {Routes, emptyTree} from '../../models';
import {addTree} from '../../actions/TreeActions';

export function PlantATreeScreen({navigation}) {
  const dispatch = useDispatch();
  const addATree = (tree) => dispatch(addTree(tree));
  const [activeScreen, setActiveScreen] = useState(0);
  const [newTree, setNewTree] = useState(emptyTree);

  function plantTree() {
    addATree({
      ...newTree,
      timestamp: new Date().getTime(),
    });
    setNewTree(emptyTree);
    setActiveScreen(0);
    navigation.navigate(Routes.ALL_TREES);
  }

  function pressedNext() {
    const needToEnterName = activeScreen === 0 && newTree.name.length < 2;
    if (needToEnterName) {
      Alert.alert('Give the tree a name to continue');
    } else {
      setActiveScreen(activeScreen + 1);
    }
  }

  function getScreen() {
    switch (activeScreen) {
      case 0:
        return <NewTreeScreen newTree={newTree} setNewTree={setNewTree} />;
      case 1:
        return <DetailsScreen newTree={newTree} setNewTree={setNewTree} />;
      case 2:
        return <PreviewScreen newTree={newTree} setNewTree={setNewTree} />;
      default:
    }
  }

  return (
    <>
      <PageHeader activeScreen={activeScreen} />
      <View style={styles.container}>{getScreen()}</View>
      <NavigationButtons
        activeScreen={activeScreen}
        newTree={newTree}
        pressedBack={() => setActiveScreen(activeScreen - 1)}
        pressedNext={pressedNext}
        pressedSubmit={plantTree}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
