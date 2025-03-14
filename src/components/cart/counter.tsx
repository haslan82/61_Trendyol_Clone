import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CounterProps } from '../../models/ui/counterProps';
import { Colors } from '../../themes/colors';
import Icon from '@react-native-vector-icons/feather';

const Counter: React.FC<CounterProps> = ({ quantity }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="minus" size={20} color={Colors.primary} />
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantity}> {quantity} </Text>
            </View>
            <TouchableOpacity>
                <Icon name="plus" size={20} color={Colors.primary} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: Colors.gray,
        borderRadius: 100,
        flexDirection: 'row',
    },
    quantityContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.primary1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantity: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.primary,
    },
});

export default Counter;
