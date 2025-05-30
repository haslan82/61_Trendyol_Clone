import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { Colors } from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';





const Notifications
    : React.FC = () => {
        return (
            <View style={defaultScreenStyle.container}>
                <View style={styles.notiBox}>
               <View>
               <Text style={{ fontSize: 30 }}>İndirim kuponu hesabınıza tanımlanmıştır.
               </Text>
               </View>
                
                <View>
                    <Icon name="notifications-outline" size={30} color={Colors.primary} />
                </View>
            </View> 
            </View>
           
        );
    };


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: Colors.primary1,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: Colors.gray,
        marginTop:10,
       
    },
    notiBox: {
        flexDirection: 'row',
        backgroundColor: Colors.primary1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.gray,
        marginTop:10,
        borderRadius:10,
        paddingLeft:10
    },
    
});

export default Notifications;