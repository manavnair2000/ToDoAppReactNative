import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
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
    },
    headerText:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 18,
        marginTop:5
    }
});