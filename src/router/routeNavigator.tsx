import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC<Props> = ({route, navigation}) => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
       
    }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
