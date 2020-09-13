import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  trees: [],
};

const treeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TREE':
      const {trees} = state;
      const {payload: tree} = action;
      trees.push({
        ...tree,
        id: `tree-${trees.length + 1}`,
        timestamp: new Date().getTime(),
      });
      const newState = {trees};
      AsyncStorage.setItem('state', JSON.stringify(newState));

      return newState;

    case 'SET_INITIAL_DATA':
      console.log('Setting initial data...');
      return {trees: action.payload};

    default:
      return state;
  }
};

export default treeReducer;
