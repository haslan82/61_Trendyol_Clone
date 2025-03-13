import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { width } from '../../utils/constants';




const Discount: React.FC = ({ }) => {
  return (
    <View style={styles.container}>
     <Icon name="pricetag" size={16} color={Colors.primary} />
     <Text style={styles.text}>2. Ürün İndirimi</Text>
    </View>
  );
};


const styles = StyleSheet.create({

container: {
alignItems: 'center',
backgroundColor:Colors.primary1,
justifyContent: 'center',
width:width*0.12,
margin:5,
paddingVertical:5,
borderRadius:5
 },
 text:{
    fontSize:8,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color:Colors.green
 }
});

export default Discount;