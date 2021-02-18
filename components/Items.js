import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Item({ item, delItem }) {
    const deleteItem = ()=>{
        delItem(item.key)
    }
    return(
        <View style={styles.itemList}>
            <TouchableOpacity onPress={deleteItem}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
           <Text style={styles.itemStyle}>{item.text}</Text>
        </View>
    );
    
};
const styles = StyleSheet.create({
    itemList:{
        marginHorizontal: 50,
        paddingVertical:10,
        marginVertical: 10,
        borderColor: 'black',
        borderStyle: 'dashed',
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderWidth: 1,
        flexDirection:'row'
    },
    itemStyle:{
        paddingLeft: 15
    }

});