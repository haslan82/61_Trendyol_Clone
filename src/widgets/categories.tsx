import React, {useEffect} from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCategories } from '../store/actions/categoriesActions';
import { RootState } from '../store';
import CategoryItem from '../components/categories/categoryItem';



interface Props {
  navigation: any;
  route: any;
}

const Categories: React.FC<Props> = ({navigation, route}) => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);

  return (
    
    <FlatList 
    showsHorizontalScrollIndicator={false} // yatay çizgi gizleme
    horizontal
    data={categories}
    renderItem={({item}) =>
         <CategoryItem category={item} />
}/>
   
  );
};

export default Categories;
