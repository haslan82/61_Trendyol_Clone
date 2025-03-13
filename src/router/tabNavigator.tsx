import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import { TABNAVIGATOR } from '../utils/routes';
import { Colors } from '../themes/colors';
import TabIcon from '../components/router/tabIcon';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarIcon: ({ size, focused, color }) => (
          <TabIcon route={route} size={size} color={color} focused={focused} />
        ),
        headerRight: () => {
          return(
            <HeaderRight />
          )
        }
      })}
    >
      <Tab.Screen name={TABNAVIGATOR.Home} component={Home} />
      <Tab.Screen name={TABNAVIGATOR.Search} component={Search} />
      <Tab.Screen name={TABNAVIGATOR.Favorites} component={Favorites} />
      <Tab.Screen
      options={{
        tabBarBadge: 3
      }}
      name={TABNAVIGATOR.Cart} component={Cart} />
      <Tab.Screen name={TABNAVIGATOR.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
