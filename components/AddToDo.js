import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function AddToDo({ addItem }) {
    const [todo, setTodo] = useState('');
    const setValue = (val)=>{
        setTodo(val);
    }
    const addAnItem = () =>{
        addItem(todo);
        setTodo('');
    }
    return (
        <View style={styles.toDo}>
            <View style={styles.itemStyle}>
                <TextInput 
                    style={styles.textItem} 
                    onChangeText={setValue}
                    value={todo}
                />
                <View style={styles.btnStyle}>
                    <Button onPress={addAnItem} title="Add ToDo Item" color="coral"/>
                </View>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    toDo :{
        paddingTop: 30,
        // backgroundColor :'pink',
        marginTop: 30
    },
    itemStyle: {
        marginHorizontal: 50,
        marginTop: 10
    },
    textItem :{
        alignItems : 'center',
        borderColor: 'grey',
        borderWidth : 1,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 8
    },
    btnStyle :{
        marginVertical: 15,
    }
});