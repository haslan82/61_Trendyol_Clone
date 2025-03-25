import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { widgetsHeaderProps } from '../../models/ui/widgetsProps';


const WidgetsHeader: React.FC<widgetsHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
export default WidgetsHeader;
