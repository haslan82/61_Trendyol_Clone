import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import { height, width } from '../utils/constants';

const Introduction: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require('../assets/images/2.jpeg')}
        style={{width: width*0.8, height:height*0.3, resizeMode: 'contain'}}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Introduction;
