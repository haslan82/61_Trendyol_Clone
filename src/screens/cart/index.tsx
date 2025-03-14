import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from '../../components/cart/cartItem';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';








const Cart: React.FC = ({}) => {
  const {cart}= useSelector((state: RootState) => state.cart);
 // console.log(cart);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={cart} renderItem={({item})=><CartItem product={item} />}/>
    </View>
  );
};


const styles = StyleSheet.create({

container: {

flex: 1,

 }
});

export default Cart;