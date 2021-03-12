import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Box Screen</Text>
    <Text style={styles.textStyle}>Box Screen2</Text>
    <Text style={styles.textStyle}>Box Screen3</Text>
  </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        alignItems: 'flex-end',
        justifyContent:'space-between'
    },
    textStyle: {
        borderWidth: 3 ,
        borderColor: 'red'
    }
});

export default BoxScreen;
