import React from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../themes/colors';




const FavoritesButton


: React.FC<any> = ({ }) => {
  return (
    <TouchableOpacity style={styles.container}>
<Icon name={'heart-outline'} size={20} color={Colors.black} />
        
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({

container: {
position: 'absolute',
 }
});

export default FavoritesButton
;