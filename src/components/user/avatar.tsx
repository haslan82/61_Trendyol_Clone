import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AvatarProps } from '../../models/ui/avatarProps';
import { Colors } from '../../themes/colors';
import { width } from '../../utils/constants';
import { getInitials } from '../../widgets/functions';


type Props = {} ;


const Avatar: React.FC<AvatarProps> = ({ name, surname, image,size}) => {
  return (
    <View style={[styles.container,{width:size, height:size}]}>
      <Text style={{ fontSize: 30}}>{getInitials(name, surname)} </Text>
    </View>
  );
};


const styles = StyleSheet.create({

container: {
alignItems: 'center',
justifyContent: 'center',
backgroundColor:Colors.green,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.8,
shadowRadius: 2,
margin:5,
paddingVertical:5,
borderRadius:50
 }
});

export default Avatar;