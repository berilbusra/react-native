import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {name: 'Max', age: '20'},
        {name: 'Danny', age: '21'},
        {name: 'Charlie', age: '22'},
        {name: 'Fernando', age: '23'},
        {name: 'Stella', age: '24'},
        {name: 'Lana', age: '25'}
    ]
     
    //renderItem={(element)} />
    //element=== { item: {name: 'Friend1'}, index:0 }


    return <FlatList
    //horizontal................makes it horizontally scrolled
    keyExtractor={(friend) => friend.name}
    data={friends}
    renderItem={({item}) => {
        return <Text>
            Name: {item.name} - Age: {item.age}</Text>
    }}
    />
  };
  
  const styles = StyleSheet.create({
  });
  
  export default ListScreen;