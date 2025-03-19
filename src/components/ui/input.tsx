/* import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { InputProps } from '../../models/ui/inputProps';
import { Colors } from '../../themes/colors';





const Input
    : React.FC<InputProps> = props({ title }) => {
    const { title } = props;
    return (
        <View style={styles.container}>


            <Text style={{ fontSize: 18 }}>{title} </Text>
            <TextInput {...props} style={styles.input} />


        </View>
    );
};


const styles = StyleSheet.create({

    container: {

        flex: 1,

    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.gray,
        padding: 20,
        marginVertical: 10,
    },
});

export default Input
    ; */

    import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { InputProps } from '../../models/ui/inputProps';
import { Colors } from '../../themes/colors';

const Input: React.FC<InputProps> = ({ title, ...props }) => { // trenyol 6  41.  dakikada değiştirdim
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <TextInput {...props} style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors?.gray || '#ccc', // Varsayılan renk eklendi
        padding: 20,
        marginVertical:5
    },
});

export default Input;
