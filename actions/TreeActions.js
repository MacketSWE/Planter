export const addTree = (tree) => ({
  type: 'ADD_TREE',
  payload: tree,
});

export const setInitialData = (trees) => ({
  type: 'SET_INITIAL_DATA',
  payload: trees,
});
