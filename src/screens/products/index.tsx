import React from 'react';
import { View, Text, StyleSheet } from 'react-native';





const ProductList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}> ProductList  </Text>
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