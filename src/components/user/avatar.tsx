import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AvatarProps } from '../../models/ui/avatarProps';
import { Colors } from '../../themes/colors';
import { width } from '../../utils/constants';


type Props = {} ;


const Avatar: React.FC<AvatarProps> = ({ name, surname, image,size}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}> Avatar  </Text>
    </View>
  );
};


const styles = StyleSheet.create({

container: {
alignItems: 'center',
backgroundColor:Colors.gray,
justifyContent: 'center',
width:100,
height:100,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.8,
shadowRadius: 2,
margin:5,
paddingVertical:5,
borderRadius:100
 }
});

export default Avatar;