import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GreetCardProps{
    name: string;
}
const GreetCard = ({name}:GreetCardProps) => {
  return (
    <View style={{
        borderWidth:1,
        padding: 10,
        borderRadius:10,
        marginBottom: 10
    }}>
    <Text>Hello {name}</Text>
  </View>
  )
}

export default GreetCard

const styles = StyleSheet.create({})