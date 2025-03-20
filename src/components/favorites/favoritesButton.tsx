import React from 'react';
import { Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../themes/colors';
import {width} from '../../utils/constants';
import {ProductItemProps} from '../../models/ui/productItemProps';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHNAVIGATOR } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';
import { addFavorite } from '../../store/slice/favoriteSlice';



const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  const navigation= useNavigation();
  const dispatch = useDispatch();
  const {isLogin} = useSelector((state:RootState) => state.auth);
  const checkLogin = ()=>{
    if (!isLogin) {
      // navigate to login screen
      // navigation.navigate('Login');
      Alert.alert('Giriş Yapınız', 'Favoriye eklemek için giriş yapınız', [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Giriş Yap', onPress: () => navigation.navigate(AUTHNAVIGATOR.Login)},
      ]);
    }
    else {
      dispatch(addFavorite(product));
      //Alert.alert('Favorilere Eklendi', product.title +'başarıyla eklendi');
    }
  }
  return (
    <TouchableOpacity
    onPress={checkLogin}
    style={styles.container}>
      <Icon
        name={product.isFavorite ? 'heart' : 'heart-outline'}
        size={20}
        color={Colors.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 0.072,
    height: width * 0.072,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    top: 5,
    right: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: Colors.white,
  },
});

export default FavoritesButton;
