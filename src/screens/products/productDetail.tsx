import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../store/actions/productsActions';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {height, width} from '../../utils/constants';
import {Colors} from '../../themes/colors';
import Button from '../../components/ui/button';
import { RootState } from '../../store';
import Rate from '../../components/products/rate';
import FavoritesButton from '../../components/favorites/favoritesButton';
import FreeCargo from '../../components/badges/freeCargo';
import Discount from '../../components/badges/discount';
import Delivery from '../../components/badges/Delivery';
import { addCart } from '../../store/slice/cartSlice';

const ProductDetail: React.FC<any> = ({route}) => {
  const {productId} = route.params;
  const {product} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView
        ////showsHorizontalScrollIndicator={false}
        >
          <FavoritesButton product={product}/>
          <Image source={{uri: product?.image}} style={styles.image} />
          <Text style={styles.category}> {product?.category} </Text>
          <Text style={styles.title}> {product?.title} </Text>
          {product.rating && <Rate size="large" rating={product.rating} />}
          <Text style={styles.description}> {product?.description} </Text>
          <View style={{flexDirection:"row"}}> 
      <FreeCargo/>
     <Discount/>
     <Delivery/>
     </View>
        </ScrollView>
      </View >
      <View style={styles.priceContainer}>
      <View style={{flex: 1, justifyContent: 'center', padding:15}}>
      <Text style={styles.price}> {product?.price} TL </Text>
      <Text style={styles.info}> Kargo Bedava </Text>
      </View >
      <View style={{flex:2, justifyContent: 'center'}}>
      <Button title='Sepete Ekle' onPress={()=>dispatch(addCart(product))} />
    
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  category: {
    fontSize: 16,
    marginVertical: 10,
    color: Colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    marginVertical: 20,
    height: height * 0.1,
    borderTopWidth: 0.5,
    borderColor: Colors.gray,
  },
  price: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: '600',
   
  },
  info:{
    fontSize: 16,
    color: Colors.green,
    fontWeight: '600',

  }
});

export default ProductDetail;
