import React from 'react';
import Categories from '../../widgets/categories';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';
import BestSeller from '../../widgets/bestSeller';
import PopularProducts from '../../widgets/popularProducts';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <ScrollView 
      showsVerticalScrollIndicator={false}>
        <View style={defaultScreenStyle.container}>
          <Categories />
          <Introduction />
          <BestSeller />
          <PopularProducts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
