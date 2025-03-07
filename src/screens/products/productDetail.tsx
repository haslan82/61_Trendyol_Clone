import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../store/actions/productsActions';
import { RootState } from '@reduxjs/toolkit/query';
 




const ProductDetail: React.FC<any>= ({route}) => {
  const productId = route.params.productId;
const {product}= useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 30}}> {product.price} </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProductDetail;
