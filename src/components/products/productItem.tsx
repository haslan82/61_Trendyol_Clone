import React from 'react';
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {height, width} from '../../utils/constants';
import {Colors} from '../../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTSNAVIGATOR } from '../../utils/routes';
import ProductDetail from '../../screens/products/productDetail';
import FavoritesButton from '../favorites/favoritesButton';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable 
    onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.ProductDetail, {productId: product.id})}
    style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={{
          width: width * 0.3,
          height: height * 0.2,
          resizeMode: 'contain',
          alignSelf: 'center', // alignItems tan farklı olduğunu unutma (alignself)
        }}
      />
      <FavoritesButton/>
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          marginVertical: 5,
          color: Colors.gray,
        }}>
        {' '}
        {product.category}
      </Text>
      <Text
        numberOfLines={2}
        style={{
          fontSize: 14,
          marginTop: 10,
          fontWeight: 'bold',
          marginVertical: 5,
        }}>
        {product.title}
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          fontWeight: 'bold',
          marginVertical: 5,
          color: Colors.primary,
        }}>
        {product.price}
        {' TL'}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    minHeight: height * 0.3,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
    margin:5
  },
});

export default ProductItem;
