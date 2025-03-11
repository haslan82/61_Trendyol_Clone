import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';
import Icon from '@react-native-vector-icons/ionicons';
import {RatingProps} from '../../models/ui/rateProps';

const Rate: React.FC<RatingProps> = ({rating}) => {
  const fullStar = Math.floor(rating.rate);
  //console.log(fullStar)
  const halfStar = rating.rate % 1 > 0.5;
  //console.log(halfStar)

  return (
    <View style={styles.container}>
      <Text style={styles.rate}> {rating.rate} </Text>
      <View style={{flexDirection: 'row'}}>
        {Array(fullStar)
          .fill(null)
          .map((item, index) => (
            <Icon key={index} name={'star'} size={24} color={Colors.primary} />
          ))}
        {halfStar && (
          <Icon name={'star-half'} size={24} color={Colors.primary} />
        )}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={styles.rate}> | {rating.count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  rate: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Rate;
