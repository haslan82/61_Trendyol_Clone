import React from 'react';

import {TabIconProbs} from '../../models/ui/tabIconProbs';
import {TABNAVIGATOR} from '../../utils/routes';
import Icon from '@react-native-vector-icons/fontawesome';

const TabIcon: React.FC<TabIconProbs> = ({route, size, color, focused}) => {
  switch (route.name) {
    case TABNAVIGATOR.Home:
      return <Icon name="rocket" size={30} color="#900" />
  
  }
};

export default TabIcon;
