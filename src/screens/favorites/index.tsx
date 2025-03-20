import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductItem from '../../components/products/productItem';



const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);
  //console.log(favorites)
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
      <FlatList   
      contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={favorites}
          renderItem={({item}) => <ProductItem product={item} />}
        />
    </View>
    </SafeAreaView>
  );
};

export default Favorites;