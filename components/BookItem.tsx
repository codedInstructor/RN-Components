import books from "@/data/Books"
import { Image, Text, View } from "react-native"

const BookItem = () =>{
    let book1 = books[0]
    return (<View style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-around",
            width:"100%",
            borderBottomWidth:1,
            padding: 10,
            borderColor:"lightgrey",
            // backgroundColor:"red"
          }}>
    
            <Image source={{
              uri:book1.image
            }} style={{
            height:150,
            width:100
            }}/>
    
            <View>
              <Text style={{
                fontSize: 20,
                fontWeight:"bold"
              }}>{book1.title}</Text>
              <Text>{book1.author}</Text>
              <Text>{book1.priceKWD}</Text>
            </View>
          </View>)
}

export default BookItem;