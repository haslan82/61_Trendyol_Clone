import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../themes/colors';
import { height } from '../../utils/constants';
import { ButtonProps } from '../../models/ui/buttonProps';





const Button: React.FC<ButtonProps> = props => {
  const { title, disabled, onPress } = props;
  return (
    <TouchableOpacity 
    onPress={onPress} 
    {...props} 
    style={[styles.container, {
    opacity: disabled ? 0.5 : 1
      //backgroundColor: disabled ? Colors.gray : Colors.primary
    }]}>
      <Text style={styles.text}>  {title} </Text>
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
    margin:5
  },
  text: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
  }
});

export default Button;