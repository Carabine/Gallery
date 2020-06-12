import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './app/screens/GalleryScreen';
import {SingleImageScreen} from './app/screens/SingleImageScreen';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {View} from 'react-native'

const Stack = createStackNavigator()

export const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Gallery" component={GalleryScreen} />
                <Stack.Screen name="SingleImage" component={SingleImageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  )
}



