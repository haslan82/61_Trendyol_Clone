import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';




const FreeCargo: React.FC = ({ }) => {
  return (
    <View style={styles.container}>
     <Icon name="cube-sharp" size={16} color={Colors.gray} />
     <Text style={styles.text}>Kargo Bedava</Text>
    </View>
  );
};


const styles = StyleSheet.create({

container: {
alignItems: 'center',
backgroundColor:Colors.lightGray1,
justifyContent: 'center',
width:"25%",
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

export default FreeCargo;