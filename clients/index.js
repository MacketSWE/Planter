import AsyncStorage from '@react-native-community/async-storage';
import {setInitialData} from '../actions/TreeActions';
import {store} from '../App';

export async function fetchInitialData() {
  // Let's pretend we're fetching the data from an API instead of this..., Marcus :)
  const cached = await AsyncStorage.getItem('state');
  if (cached) {
    const {trees} = JSON.parse(cached);
    store.dispatch(setInitialData(trees));
  }
}
