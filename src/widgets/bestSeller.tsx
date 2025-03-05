import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';
type Props = {};
const BestSeller: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
        <WidgetsHeader/>
      <Text style={{fontSize: 30}}> BestSeller </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default BestSeller;
