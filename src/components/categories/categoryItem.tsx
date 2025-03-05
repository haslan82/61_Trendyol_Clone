import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { categoryItemProbs } from '../../models/ui/categoryItemProbs';
import { Colors } from '../../themes/colors';




const CategoryItem: React.FC<categoryItemProbs> = ({category}) => {
  return (
   
      <Pressable style={styles.container}>
        <Text style={{ fontSize: 16, color: Colors.black}}>{category} </Text>
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
    borderColor:Colors.gray
  }
})
export default CategoryItem;