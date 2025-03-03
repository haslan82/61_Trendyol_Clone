import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {getAllCategories} from '../../store/actions/categoriesActions';

interface Props {
  navigation: any;
  route: any;
}

const Home: React.FC<Props> = ({navigation, route}) => {
  const deneme = useSelector((state: RootState) => state.products.deneme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <View>
      <Text>{deneme} </Text>
    </View>
  );
};


export default Home;
