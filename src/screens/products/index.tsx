import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';
import {getAllProducts} from '../../store/actions/productsActions';
import Categories from '../../widgets/categories';

const ProductList: React.FC = () => {
  const {products} = useSelector((state: RootState) => state.products);
  // console.log(products)

  const {selectedCategory} = useSelector((state: RootState) => state.categories);
  // console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
   // console.log("ÇALIŞTI")
    dispatch(getAllProducts({category: selectedCategory}));
  }, [selectedCategory]);

  return (
    <View style={defaultScreenStyle.container}>
    <Categories/>
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
