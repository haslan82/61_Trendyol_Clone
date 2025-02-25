import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import {TABNAVİGATOR} from '../utils/routes';
import {Colors} from '../themes/colors';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarIcon: ({size, focused, color}) => {
          return <TabIcon route={route} size={size} color={color} focused={focused} />
        }
      })}>
      <Tab.Screen name={TABNAVİGATOR.Home} component={Home} />
      <Tab.Screen name={TABNAVİGATOR.Search} component={Search} />
      <Tab.Screen name={TABNAVİGATOR.Favorites} component={Favorites} />
      <Tab.Screen name={TABNAVİGATOR.Cart} component={Cart} />
      <Tab.Screen name={TABNAVİGATOR.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
