import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import { TabIconProbs } from '../../models/ui/tabIconProbs';
import { TABNAVİGATOR } from '../../utils/routes';







const TabIcon: React.FC<TabIconProbs> = ({route,size,color,focused}) => {
switch (route.name) {
  case TABNAVİGATOR.Home:
     return<Icon name='home-outline' size={size} color={color}/>
  case TABNAVİGATOR.Search:
     return<Icon name='search' size={size} color={color}/>
  case TABNAVİGATOR.Favorites:
     return<Icon name='heart' size={size} color={color}/>
  case TABNAVİGATOR.Cart:
     return<Icon name='cart-outline' size={size} color={color}/>
  case TABNAVİGATOR.Profile:
     return<Icon name='person-outline' size={size} color={color}/>
}
};

export default TabIcon;