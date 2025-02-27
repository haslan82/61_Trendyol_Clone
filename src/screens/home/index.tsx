import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {PRODUCTS_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';

interface Props {
  navigation: any;
  route: any;
}

const Home: React.FC<Props> = ({navigation, route}) => {
  const deneme = useSelector((state: RootState) => state.products.deneme);
  useEffect(() => {
    getRequest({}, PRODUCTS_URLS.ALL_PRODUCTS)
      .then(data => {
        console.log(data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View>
      <Text>{deneme} </Text>
    </View>
  );
};

export default Home;
