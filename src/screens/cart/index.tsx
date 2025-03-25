import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import {Colors} from '../../themes/colors';
import {height} from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { AUTHNAVIGATOR } from '../../utils/routes';

const Cart: React.FC = ({}) => {
  const navigation= useNavigation();
  const {cart, totalPrice} = useSelector((state: RootState) => state.cart);
  // console.log(cart);
  const dispatch = useDispatch();

  const {isLogin} = useSelector((state:RootState) => state.auth);
  const checkLogin = ()=>{
    if (!isLogin) {
      // navigate to login screen
      // navigation.navigate('Login');
      Alert.alert('Giriş Yapınız', 'Sepeti onaylamadan önce giriş yapınız', [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Giriş Yap', onPress: () => navigation.navigate(AUTHNAVIGATOR.Login)},
      ]);
    }
  }

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
      ListEmptyComponent={<Text style={{textAlign:"center", fontSize:24, textAlignVertical:"center", height:"100%", marginTop:50}}>Sepetinize Ürün Ekleyiniz !</Text>}
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({item}) => <CartItem product={item} />}
      />

{
  cart?.length ==0?null : <View style={styles.priceContainer}>
        <View style={{flex: 1, justifyContent: 'center', padding: 15}}>
          <Text style={styles.total}> Toplam </Text>
          <Text style={styles.price}> {totalPrice.toFixed(2)} TL </Text> 
          {/*  trenyol 5   3:13.  dakika  to fixed */}
          <Text style={styles.info}> Kargo Bedava </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button
            title="Sepeti Onayla"
           onPress={() => checkLogin()}
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
