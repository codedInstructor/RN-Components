import { Book } from "@/data/Books";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//PascalCase
// 1. Build 2.Extract 3. Refactor
// title, image, price, author

//interface 
interface BookItemProps{
    // title:string;
    // image: string;
    // price: string;
    // author: string;
    book:Book
}
// prop = properties 


const BookItem = ({book}:BookItemProps) => {
  return (
    // 1. camelCase
    // 2. All Tags need to be closed <Image /> <Text></Text>
    // 3. All compoenents must return one thing
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        borderBottomWidth: 1,
        padding: 10,
        borderColor: "lightgrey",
        // backgroundColor:"red"
      }}
    >
      <Image
        source={{
          uri: book.image,
        }}
        style={{
          height: 150,
          width: 100,
        }}
      />

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {book.title}
        </Text>
        <Text>{book.author}</Text>
        <Text>{book.priceKWD} KWD</Text>
      </View>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({});
