import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const WidgetsHeader: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}> WidgetsHeader </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default WidgetsHeader;
