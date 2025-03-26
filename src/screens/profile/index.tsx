import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getUserInfo } from '../../store/actions/userActions';
import Avatar from '../../components/user/avatar';

interface Props { }

const Profile: React.FC = () => {
  const {user} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo({ id: 1 }));
  }, [])
  return (
    <View style={styles.container}>
   {/*   <Text style={{ fontSize: 24 }}>
  {`${user?.name.firstname.toUpperCase()} ${user?.name.lastname.toUpperCase()}`}
</Text> */}

    <Avatar/>

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