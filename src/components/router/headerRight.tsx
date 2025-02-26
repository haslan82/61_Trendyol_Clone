import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { Colors } from '../../themes/colors';


interface Props {}

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.container}>
   <Pressable style={styles.button}>
<Icon name="notifications-outline" size={30} color={Colors.black} />
   </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    button:{
        marginRight:5,
    }
})

export default HeaderRight;