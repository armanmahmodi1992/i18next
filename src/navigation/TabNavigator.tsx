import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Cat from '../screens/Cat';
import CatFunc from '../screens/CatFunc';
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'CatFunc'} component={CatFunc} />
      <Tab.Screen name={'Cat'} component={Cat} />
    </Tab.Navigator>
  );
}
