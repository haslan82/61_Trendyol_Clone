import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { categoryItemProbs } from '../../models/ui/categoryItemProbs';
import { Colors } from '../../themes/colors';
import { height } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSelectedCategory } from '../../store/slice/categoiesSlice';




const CategoryItem: React.FC<categoryItemProbs> = ({category}) => {


  const {selectedCategory}= useSelector((state:RootState)=>state.categories);
  // console.log(selectedCategory)

const dispatch = useDispatch();
// console.log(selectedCategory)
  return (
   
      <Pressable 
      onPress={()=> dispatch(setSelectedCategory(category))}
      
      style={[styles.container, selectedCategory==category?styles.selectedContainer:styles.unSelectedContainer]}>
        <Text style={[styles.title,selectedCategory==category?styles.selectedTitle:styles.unSelectedContainer]}>{category} </Text>
      </Pressable>

  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    padding: 10,
    paddingHorizontal:15,
    borderWidth: 0.5,
    borderRadius:50,
    marginVertical:10,
    borderColor:Colors.gray,
    maxHeight:height*0.05
  },
  selectedContainer:{
    backgroundColor:Colors.primary
  },
  unSelectedContainer:{
    backgroundColor:Colors.white
  },
  title:{
    fontWeight:'500',
    fontSize:16,
    
  },
  selectedTitle:{
    color:Colors.white
  },
  unSelectedTitle:{
    color:Colors.black
  }
})
export default CategoryItem;