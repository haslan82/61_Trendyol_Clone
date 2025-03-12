import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';
import {getAllProducts} from '../../store/actions/productsActions';

const ProductList: React.FC = () => {
  const {products} = useSelector((state: RootState) => state.products);
  // console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductList;
