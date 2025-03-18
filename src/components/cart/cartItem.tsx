import React from 'react';
import {Text, StyleSheet, Pressable, Image, View, TouchableOpacity} from 'react-native';
import {CartItemProps} from '../../models/ui/cartItemProps';
import {height, width} from '../../utils/constants';
import {Colors} from '../../themes/colors';
import Delivery from '../badges/Delivery';
import FreeCargo from '../badges/freeCargo';
import Discount from '../badges/discount';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTSNAVIGATOR } from '../../utils/routes';
import Counter from './counter';
import Icon from 'react-native-vector-icons/Ionicons';

import { removeFromCart } from '../../store/slice/cartSlice';
import { useDispatch } from 'react-redux';


type Props = {};

const CartItem: React.FC<CartItemProps> = ({product}) => {
  //console.ePressableog(product)
  const navigation = useNavigation();
const dispatch = useDispatch();
  //console.log(product)
  return (
    <Pressable 
    onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.ProductDetail, {productId: product.id})}
    style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>

      <View style={{flex: 1, paddingHorizontal: 10}}>
        <View>
          <Text style={styles.title}> {product?.title}</Text>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Delivery />
          <FreeCargo />
          <Discount />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
           <Counter product={product}  quantity={product?.quantity}/>
          </View>

          <View>
            <Text style={styles.price}> {product?.price} TL </Text>
          </View>
        </View>
        <TouchableOpacity 
        onPress={()=>dispatch(removeFromCart(product.id))}
        style={{ alignSelf: 'flex-end', marginVertical: 5}}>
         <Icon name="trash" size={25} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
    paddingVertical: 10,
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center', // alignItems tan farklı olduğunu unutma (alignself)
  },
  price: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  quantity: {
    fontSize: 16,
    marginVertical: 5,
    color: Colors.primary,
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: '500',
  },
});

export default CartItem;
