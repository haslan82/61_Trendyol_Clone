import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../themes/colors';
import { height } from '../../utils/constants';





const Button: React.FC<Props> = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}> Sepete Ekle  </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({

container: {
alignItems: 'center',
justifyContent: 'center',
backgroundColor: Colors.primary,
minHeight: height * 0.05,
borderRadius: 10,
paddingVertical: 10,
paddingHorizontal: 20,
},
text:{
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
}
 });

export default Button;