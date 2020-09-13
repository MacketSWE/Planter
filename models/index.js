import {Images} from '../constants/assets';

export const Routes = {
  PLANT_TREE: 'Plant a tree',
  ALL_TREES: 'All trees',
};

export const emptyTree = {
  name: '',
  type: 0,
  weight: null,
  location: null,
};

export function mapTypeToImage(type) {
  switch (type) {
    case 0:
      return Images.palmTree;
    case 1:
      return Images.spurceTree;
    case 2:
      return Images.leafTree;
    default:
  }
}

export function mapRouteToImage(name) {
  switch (name) {
    case Routes.PLANT_TREE:
      return Images.spurceTree;
    case Routes.ALL_TREES:
      return Images.list;
    default:
      return null;
  }
}

export function mapUnitIndexToString(index) {
  switch (index) {
    case 0:
      return 'Kg';
    case 1:
      return 'grams';
    default:
      return null;
  }
}
