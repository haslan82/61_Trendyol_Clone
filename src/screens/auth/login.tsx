import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import { height } from '../../utils/constants';
import { Colors } from '../../themes/colors';
import { Formik } from 'formik';
import { LoginForm } from '../../models/ui/loginForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { userLogin } from '../../store/actions/authAction';
import { useNavigation } from '@react-navigation/native';





const Login: React.FC = () => {
const navigation= useNavigation();
     const dispatch = useDispatch<AppDispatch>();
const {isLogin,pending} = useSelector((state:RootState) => state.auth);
    const initialValues: LoginForm = {
        username: 'johnd',
        password: 'm38rmF$'
    }
useEffect(() => {
    if(isLogin){
      navigation.goBack();
    }
}, [isLogin])
  
    return (
        <View style={defaultScreenStyle.safeAreaContainer}>
            <ScrollView>

                <Formik
                    initialValues={initialValues}
                    onSubmit={values => dispatch(userLogin(values))}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={defaultScreenStyle.container}>
                            <Input
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.username} title='Kullanıcı Adı' />
                            <Input
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password} title='Şifre'
                                secureTextEntry
                            />

                            <Text style={styles.forgot}>Şifremi Unuttum</Text>
                            <View style={{ marginTop: height * 0.05 }}>

                                <Button disabled={pending} onPress={handleSubmit} title='Giriş Yap' />
                            </View>
                        </View>
                    )}
                </Formik>



            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    forgot: {
        textAlign: 'right',
        marginTop: 10,
        marginVertical: 10,
        color: Colors.primary
    }
});

export default Login;