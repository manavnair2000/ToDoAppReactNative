import { StatusBar } from 'expo-status-bar';
import React,{ useState }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/Header'
export default function App() {
  const [todoitems, modifyItems] =useState([
    {todo: 'Play Xbox',key :'1'},
    {todo: 'Goto store',key :'2'},
    {todo: 'Do react Native',key :'3'},
    {todo: 'Cycle through list',key :'4'},
    {todo: 'Listen to music',key :'5'},
    {todo: 'Play Apex Legends',key :'6'}
  ]);
  const removeItems = (key) =>{
    modifyItems((todo)=>{
      return todo.filter((item)=> item.key != key )
    })
  }
  return (
    <View style={styles.container}>
      <Header/>
        <View style={styles.body}>
        
        <FlatList  contentContainerStyle={styles.flatList}
          data={todoitems}
          renderItem={({item})=>(
          <TouchableOpacity style={styles.touchableStyle} onPress={() => removeItems(item.key)} >
            <Text style={styles.itemStyle}>{item.todo}</Text>
          </TouchableOpacity>
          )}
        />
        <Text>Type in a new To Do:</Text>
        {/* <TextInput multiline placeholder="Bake pancakes" styles={styles.inputField}  */}
        {/* <Text>Enter Name:</Text>
        <TextInput multiline placeholder="e.g. Somu"  
        style={styles.inputField} 
        onChangeText={(val)=>{ setPerson({name:val, age:person.age})}}/>
        <Text>Enter Age:</Text>
        <TextInput multiline placeholder="e.g. 69" 
          style={styles.inputField} keyboardType='numeric' onChangeText={(val) => { setPerson({ name: person.name, age: val }) }}/>
        <Text>Hello, World! I am {person.name} and I am of {person.age} years old</Text> */}
      </View>
        <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  body:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemStyle:{
    color:'#000',
    fontSize:20,
    backgroundColor:'#a00',
    color: 'white',
    margin:50
  },  
  // touchableStyle:{
  //   alignItems:'center',
  //   margin:50
  // },
  inputField:{
    borderWidth :1,
    borderColor: 'red',
    padding: 8,
    width : 180,
  }
});
