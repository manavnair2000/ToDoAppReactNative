import { StatusBar } from 'expo-status-bar';
import React,{ useState }  from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export default function App() {
  const [person, setPerson] =useState({name: 'Somu',age :'N/A'});
  
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput multiline placeholder="e.g. Somu"  
      style={styles.inputField} 
      onChangeText={(val)=>{ setPerson({name:val, age:person.age})}}/>
      <Text>Enter Age:</Text>
      <TextInput multiline placeholder="e.g. 69" 
        style={styles.inputField} keyboardType='numeric' onChangeText={(val) => { setPerson({ name: person.name, age: val }) }}/>
      <Text>Hello, World! I am {person.name} and I am of {person.age} years old</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField:{
    borderWidth :1,
    borderColor: 'red',
    padding: 8,
    width : 180
  }
});
