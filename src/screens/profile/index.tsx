import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props { }

const Profile: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>
        {token}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    
  }


});


export default Profile;