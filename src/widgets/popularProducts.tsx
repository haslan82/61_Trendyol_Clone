import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';


type Props = {};



const PopularProducts: React.FC = () => {
  return (
    <View style={styles.container}>
      <WidgetsHeader title="Popüler Ürünler" />
      <Text style={{fontSize: 30}}> PopularProducts </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default PopularProducts;
