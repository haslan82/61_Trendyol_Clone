import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from '../../components/cart/cartItem';








const Cart: React.FC = ({}) => {
  const {cart}= useSelector((state: RootState) => state.cart);
  console.log(cart);
  return (
    <View style={styles.container}>
      <FlatList  data={cart} renderItem={((item)=><CartItem/>)}/>
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

export default Cart;