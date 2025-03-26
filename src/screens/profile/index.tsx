import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getUserInfo } from '../../store/actions/userActions';
import Avatar from '../../components/user/avatar';
import Button from '../../components/ui/button';

interface Props { }

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo({ id: 9 }));
  }, [])
  return (
 /*    <ScrollView>

      <View style={styles.container}>


        <Avatar name={user?.name.firstname} surname={user?.name.lastname} image={user?.image} size={100} />
        <Text style={{ fontSize: 30, marginTop: 10, fontWeight: 'bold' }}>
          {`${user?.name.firstname.toUpperCase()} ${user?.name.lastname.toUpperCase()}`}
        </Text>
        <Text style={{ fontSize: 20, marginTop: 10, marginHorizontal: 10 }}>{user?.email}</Text>
      </View>

      <View style={{ marginBottom: 20, padding: 20 }}>
        <Button title="Edit Profile" onPress={() => { }} />
        <Button title="Change Password" onPress={() => { }} />
        <Button title="Logout" onPress={() => { }} />
      </View>

    </ScrollView> */

    <ScrollView >
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Avatar
              name={user?.name?.firstname}
              surname={user?.name?.lastname}
              image={user?.image}
              size={150}
            />
            <Text style={{fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>
              {user?.name.firstname} {user?.name.lastname}
            </Text>
            <Text style={{fontSize: 20, marginTop: 10}}>{user?.email}</Text>
          </View>
          <View style={{padding: 20}}>
            <Button title="Edit Profile" onPress={() => {}} />
            <Button
              title="Log out"
              onPress={() => {
                //dispatch(userLogOut());
              }}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text style={{fontSize: 20, marginTop: 20, textAlign: 'center'}}>
            Henüz giriş yapmadınıza devam etmek için giriş yapınız
          </Text>
          <Button
            title="Giriş Yap"
            onPress={() => {
              //navigation.navigate(AUTHNAVIGATOR.LOGIN);
            }}
          />
        </View>
      )}
    </View>
  </ScrollView>


  );
};
const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,



  }


});


export default Profile;