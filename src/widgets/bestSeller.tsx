import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getBestSellerProducts} from '../store/actions/productsActions';
import {RootState} from '../store';
import ProductItem from '../components/products/productItem';

const BestSeller: React.FC = () => {
  const bestSellerProducts = useSelector(
    (state: RootState) => state.products.bestSellerProducts,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBestSellerProducts({}));
  }, []);

  //console.log("bestSellerProducts",bestSellerProducts);

  return (
    <View style={styles.container}>
      <WidgetsHeader title="Çok Satan Ürünler" />
      <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal
      data={bestSellerProducts} renderItem={({item}) => <ProductItem product={item}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});
export default BestSeller;
