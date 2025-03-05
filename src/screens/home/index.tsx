import React from 'react';
import Categories from '../../widgets/categories';
import { SafeAreaView,View } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';




const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
  <View>
  <Categories />
  <Introduction/>
  </View>
    </SafeAreaView>
  );
};

export default Home;
