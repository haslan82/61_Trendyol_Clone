import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { NOTIFICATIONNAVIGATOR } from '../../utils/routes';


interface Props {}

const HeaderRight: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
   <Pressable 
   onPress={() => navigation.navigate(
    NOTIFICATIONNAVIGATOR.Notifications
   )}
   style={styles.button}>
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