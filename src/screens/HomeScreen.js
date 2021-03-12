import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Beril</Text>
    <Button
    onPress={() => navigation.navigate('Components')}
    title="Component Screen"
    />

    <Button 
    onPress={() => navigation.navigate('List')}
    title="List Screen"
    />

<Button 
    onPress={() => navigation.navigate('Image')}
    title="Image Screen"
    />

<Button 
    onPress={() => navigation.navigate('Box')}
    title="Box Screen"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


