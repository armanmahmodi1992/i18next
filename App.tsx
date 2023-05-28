import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import './i18n';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
