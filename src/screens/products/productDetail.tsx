import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';





const ProductDetail: React.FC = ({route}) => {
  const productId = route.params.productId;
  return (
    <View style={styles.container}>
     <ScrollView>
     <Text style={{ fontSize: 30 }}> {productId}  </Text>
     </ScrollView>
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

export default ProductDetail;