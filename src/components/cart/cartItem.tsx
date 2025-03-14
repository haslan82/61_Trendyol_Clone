import React from 'react';
import {Text, StyleSheet, Pressable, Image, View } from 'react-native';
import { CartItemProps } from '../../models/ui/cartItemProps';
import { height, width } from '../../utils/constants';


type Props = {} ;


const CartItem: React.FC<CartItemProps> = ({ product}) => {
  //console.ePressableog(product)
  return (
    <Pressable style={styles.container}>
     <View style={{}}>
    
      <Image
        source={{uri: product.image}}
        style={{
          width: width * 0.3,
          height: height * 0.2,
          resizeMode: 'contain',
          alignSelf: 'center', // alignItems tan farklı olduğunu unutma (alignself)
        }}
      />
     </View>

     
     <View>

      <View>
      <Text style={{ fontSize: 30 }}> {product?.title}</Text>
      </View>

      <View>
      <Text style={{ fontSize: 30 }}> {product?.title}</Text>
      </View>

     </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({

container: {
flexDirection:"row",
 }
});

export default CartItem;