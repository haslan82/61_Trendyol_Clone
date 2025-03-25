import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Ionicons'
import {RatingProps} from '../../models/ui/rateProps';


const Rate: React.FC<RatingProps> = ({rating,size}) => {
  const fullStar = Math.floor(rating?.rate || 0);
  //console.log(fullStar)
  const halfStar = rating?.rate % 1 > 0.5;
  //console.log(halfStar)

  return (
    <View style={styles.container}>
      <Text style={[styles.rate,{fontSize: size=="large"?18:14}]}> {rating?.rate } </Text>
      <View style={{flexDirection: 'row'}}>
        {Array(fullStar)
          .fill(null)
          .map((item, index) => (
            <Icon key={index} name={'star'} size={size=="small"?15:20} color={Colors.primary} />
          ))}
        {halfStar && (
          <Icon name={'star-half'} size={size=="small"?15:20} color={Colors.primary} />
        )}
      </View>
      {size=="large"&& <View style={{ justifyContent: 'center'}}>
        <Text style={styles.rate}> | {rating?.count} Reviews</Text>
      </View>}
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
    
    fontWeight: 'bold',
  },
});

export default Rate;
