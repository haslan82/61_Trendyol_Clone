import React from 'react';
import Categories from '../../widgets/categories';
import { SafeAreaView,View } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';
import BestSeller from '../../widgets/bestSeller';
import PopularProducts from '../../widgets/popularProducts';



const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
  <View style={defaultScreenStyle.container}>
  <Categories />
  <Introduction/>
  <BestSeller/>
  <PopularProducts/>
  </View>
    </SafeAreaView>
  );
};

export default Home;
