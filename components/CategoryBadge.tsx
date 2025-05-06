import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CatBadProp{
    genreName:string;
}
const CategoryBadge = ({genreName}:CatBadProp) => {
  return (
    <TouchableOpacity onPress={()=>{alert(`You clicked on ${genreName}`)}} style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{genreName}</Text>
      </TouchableOpacity>
  )
}

export default CategoryBadge

const styles = StyleSheet.create({
    badgeContainer:{
        borderWidth:1,
        padding:10,
        borderRadius:10,
        alignItems:"center",
        margin:5
      },

    badgeText:{
        fontWeight:"bold",
        color:"red"
    }
})