import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';
import {getAllProducts} from '../../store/actions/productsActions';
import Categories from '../../widgets/categories';
import {Colors} from '../../themes/colors';

const ProductList: React.FC = () => {
  const {products, pending} = useSelector((state: RootState) => state.products);
  // console.log(products)

  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );
  // console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("ÇALIŞTI")
    dispatch(getAllProducts({category: selectedCategory}));
  }, [selectedCategory]);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      {pending ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductList;
