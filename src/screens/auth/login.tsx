import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import { height } from '../../utils/constants';
import { Colors } from '../../themes/colors';





const Login: React.FC = () => {
    return (
        <View style={defaultScreenStyle.safeAreaContainer}>
            <ScrollView>
                <View style={defaultScreenStyle.container}>
                    <Input title='E-posta' />
                    <Input title='Şifre' />
                    <Text style={styles.forgot}>Şifremi Unuttum</Text>
                    <View style={{ marginTop: height * 0.05}}>
                       
                        <Button title='Giriş Yap' />
                    </View>
                </View>
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