import React, { useEffect } from 'react';
import Categories from '../../widgets/categories';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';
import BestSeller from '../../widgets/bestSeller';
import PopularProducts from '../../widgets/popularProducts';
import messaging from '@react-native-firebase/messaging';



const Home: React.FC = () => {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    requestUserPermission();
  }, []);
  
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
