import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


type Props = {} ;


const CartItem: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}> CartItem  </Text>
    </View>
  );
};


const styles = StyleSheet.create({

container: {
alignItems: 'center',
flex: 1,
justifyContent: 'center'
 }
});

export default CartItem;