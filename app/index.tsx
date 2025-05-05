import Cards from "@/components/Cards";
import books from "@/data/Books";
import { View } from "react-native";

export default function Index() {

  let book1 = books[2]
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >

<Cards />
<Cards />
<Cards />
<Cards />
<Cards />
<Cards />
<Cards />
<Cards />


      {/* 1. Build 2. Extract 3. Refactor */}
      {/* <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/>
      <BookItem/> */}

      
      {/* <View>
        <Text>Hello flan</Text>
      </View>
      <View>
        <Text>Hello flan</Text>
      </View>
      <View>
        <Text>Hello flan</Text>
      </View>
      <View>
        <Text>Hello flan</Text>
      </View>
      <View>
        <Text>Hello flan</Text>
      </View> */}


    </View>
  );
}
