import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import { AUTHNAVIGATOR, PRODUCTSNAVIGATOR, TABNAVIGATOR } from '../utils/routes';
import ProductList from '../screens/products';
import ProductDetail from '../screens/products/productDetail';
import { Colors } from '../themes/colors';
import Login from '../screens/auth/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { checkUser } from '../store/slice/authSlice';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
const dispatch = useDispatch();
const getState = async() => {
  const token = await AsyncStorage.getItem('token');
   //console.log("KAYDEDİLEN TOKEN =>",token)
  if(token){
    dispatch(checkUser(token))
}
}
useEffect(() => {
  getState()
})
  return (
    <Stack.Navigator
    /*  screenOptions={{
        headerShown: false,
      }} */
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name={TABNAVIGATOR.TabNavigator}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Geri',
          headerTintColor: Colors.black,
        }}
        name={PRODUCTSNAVIGATOR.ProductList}
        component={ProductList}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Geri',
          headerTintColor: Colors.black,
        }}
        name={PRODUCTSNAVIGATOR.ProductDetail}
        component={ProductDetail}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Geri',
          headerTintColor: Colors.black,
        }}
        name={AUTHNAVIGATOR.Login}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
