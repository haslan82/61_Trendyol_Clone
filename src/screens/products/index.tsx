import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';





const ProductList: React.FC = () => {
  const {products} = useSelector((state: RootState) => state.products);
  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <FlatList data={products}/>
    </View>
  );
};

const styles = StyleSheet.create({

container: {
alignItems: 'center',
flex: 1,
justifyContent: 'center'
 }
});

export default ProductList;