import React, { useEffect } from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getPopularProducts } from '../store/actions/productsActions';
import ProductItem from '../components/products/productItem';






const PopularProducts: React.FC = () => {

  const popularProducts = useSelector(
    (state: RootState) => state.products.popularProducts,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);

  //console.log("bestSellerProducts",bestSellerProducts);


  return (
    <View style={styles.container}>
      <WidgetsHeader title="Popüler Ürünler" />
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={popularProducts} renderItem={({item}) => <ProductItem product={item}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default PopularProducts;
