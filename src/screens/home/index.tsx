import React from 'react';
import Categories from '../../widgets/categories';
import { SafeAreaView, StyleSheet, View } from 'react-native';




const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
  <View>
  <Categories />
  </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default Home;
