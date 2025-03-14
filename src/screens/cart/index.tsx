import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import {addCart} from '../../store/slice/cartSlice';
import {Colors} from '../../themes/colors';
import {height} from '../../utils/constants';

const Cart: React.FC = ({}) => {
  const {cart, totalPrice} = useSelector((state: RootState) => state.cart);
  // console.log(cart);
  const dispatch = useDispatch();
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
      ListEmptyComponent={<Text style={{textAlign:"center", fontSize:24, textAlignVertical:"center", height:"100%", marginTop:50}}>Henüz Sepete Ürün Eklemediniz !</Text>}
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({item}) => <CartItem product={item} />}
      />

{
  cart?.length ==0?null : <View style={styles.priceContainer}>
        <View style={{flex: 1, justifyContent: 'center', padding: 15}}>
          <Text style={styles.total}> Toplam </Text>
          <Text style={styles.price}> {totalPrice} TL </Text>
          <Text style={styles.info}> Kargo Bedava </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button
            title="Sepeti Onayla"
            //onPress={() => useDispatch(addCart(product))}
          />
        </View>
      </View>
}

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    height: height * 0.08,
    borderTopWidth: 0.5,
    borderColor: Colors.gray,
  },
  total: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
  },
  price: {fontSize: 16, color: Colors.black, fontWeight: '500'},
  info: {fontSize: 12, color: Colors.green, fontWeight: '600'},
});

export default Cart;
