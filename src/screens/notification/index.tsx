import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';





const Notifications
    : React.FC = () => {
        return (
            <View style={defaultScreenStyle.safeAreaContainer}>
                <Text style={{ fontSize: 30 }}> Notifications
                </Text>
            </View>
        );
    };


const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

export default Notifications
    ;