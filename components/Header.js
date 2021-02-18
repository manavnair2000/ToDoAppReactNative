import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header() {

    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>My To-Do App</Text>
        </View>
    );
}
const styles = StyleSheet.create({

    header:{
        backgroundColor: '#fa0',
        padding:28,
        borderBottomEndRadius : 20,
        borderBottomStartRadius: 20,
    },
    headerText:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 18,
        marginTop:5
    }
});