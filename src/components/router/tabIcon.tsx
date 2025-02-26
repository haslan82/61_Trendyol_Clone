import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {TabIconProbs} from '../../models/ui/tabIconProbs';
import {TABNAVIGATOR} from '../../utils/routes';

const TabIcon: React.FC<TabIconProbs> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.Home:
      return <Icon name="home-outline" size={size} color={color} />;
    case TABNAVIGATOR.Search:
      return <Icon name="search" size={size} color={color} />;
    case TABNAVIGATOR.Favorites:
      return <Icon name="heart" size={size} color={color} />;
    case TABNAVIGATOR.Cart:
      return <Icon name="cart-outline" size={size} color={color} />;
    case TABNAVIGATOR.Profile:
      return <Icon name="person-outline" size={size} color={color} />;
    default:
      return <Icon name="help-circle-outline" size={size} color={color} />;
  }
};

export default TabIcon;
