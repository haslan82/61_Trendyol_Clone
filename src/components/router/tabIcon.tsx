import React from 'react';
import {TABNAVIGATOR} from '../../utils/routes';
import { TabIconProps } from '../../models/ui/tabIconProbs';
import Icon from 'react-native-vector-icons/Ionicons';



const TabIcon: React.FC<TabIconProps> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.Home:
      return <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
    case TABNAVIGATOR.Search:
      return <Icon name={focused ? 'search' : 'search-outline'} size={size} color={color} />;
    case TABNAVIGATOR.Favorites:
      return <Icon name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />;
    case TABNAVIGATOR.Cart:
      return <Icon name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />;
    case TABNAVIGATOR.Profile:
      return <Icon name={focused ? 'person' : 'person-outline'} size={size} color={color} />;
  }
};

export default TabIcon;
