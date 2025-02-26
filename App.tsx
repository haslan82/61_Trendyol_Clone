import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';

const App: React.FC = () => {
  return <NavigationContainer>
 <RootNavigator/>
  </NavigationContainer>;
};

export default App;


