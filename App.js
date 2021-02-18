import { StatusBar } from 'expo-status-bar';
import React,{ useState }  from 'react';
import { StyleSheet, View, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import Item from './components/Items';
export default function App() {
  const [toDoItem, modToDoItem] =useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  const addItem = (val) =>{
    return modToDoItem([ 
      {text: val, key:Math.random().toString()},
      ...toDoItem
    ]);
  }
  const delItem = (key) =>{
    modToDoItem(todos =>{
      return todos.filter(todo => todo.key!= key)
    });
  };
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View>
          <AddToDo addItem={addItem}/>

        </View>
        <View style={styles.flatList}>
          <FlatList
            data={toDoItem}
            renderItem={ ({item}) => (
                  <Item item={item} delItem={delItem}/>
            )}
          />
        </View>
          <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
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
  },
  flatList:{
    flex:1
  }
});
