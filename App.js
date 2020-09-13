import 'react-native-gesture-handler';

import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStore} from 'redux';
import React, {useEffect} from 'react';

import {AllTreesScreen} from './screens/AllTreesScreen';
import {Colors} from './constants/layout';
import {PlantATreeScreen} from './screens/PlantATreeScreen/PlantATreeScreen';
import {Routes, mapRouteToImage} from './models';
import {fetchInitialData} from './clients';
import treeReducer from './reducers/TreeReducer';

export const store = createStore(treeReducer);
const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    resizeMode="contain"
                    source={mapRouteToImage(route.name)}
                    style={[styles.icon, focused && styles.focused]}
                  />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: Colors.primary,
              inactiveTintColor: Colors.gray,
              labelStyle: {fontWeight: 'bold'},
            }}>
            <Tab.Screen name={Routes.PLANT_TREE} component={PlantATreeScreen} />
            <Tab.Screen name={Routes.ALL_TREES} component={AllTreesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  focused: {
    tintColor: Colors.primary,
  },
  icon: {
    height: 20,
    tintColor: Colors.gray,
    width: 20,
  },
});

export default App;
