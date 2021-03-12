 import React from 'react';
 import { Text, StyleSheet, View } from 'react-native';

 const ComponentsScreen = () => {
     const greeting= 'Hello there!'
     const aa= <Text> I'M BLUE!</Text>

     return <View>
         <Text style={styles.textStyle}> This is the screen.</Text>
         <Text> This is the screen.</Text>
         <Text> { greeting }</Text>
         {aa}
         </View>
 }

 const styles = StyleSheet.create({
     textStyle: {
         fontSize: 30
     },
     h2Style:{
         fontSize: 20

     }
 })

 export default ComponentsScreen;