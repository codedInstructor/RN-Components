import BookItem from "@/components/BookItem";
import CategoryBadge from "@/components/CategoryBadge";
import books from "@/data/Books";
import { ScrollView, View } from "react-native";

export default function Index() {
  let book1 = books[0]
  let book2 = books[1]
  let book3 = books[2]
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={{
        flexDirection:"row"
      }}>
        <CategoryBadge genreName="Fiction"/>
        <CategoryBadge genreName="Self Help"/>
        <CategoryBadge genreName="Horror"/>
        <CategoryBadge genreName="Classics"/>
        <CategoryBadge genreName="Philsophy"/>
        <CategoryBadge genreName="YA"/>
        <CategoryBadge genreName="Comedy"/>
        <CategoryBadge genreName="Arabic"/>
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
      <BookItem title={book1.title} author={book1.author} image={book1.image} price={book1.priceKWD}/>
      <BookItem title={book2.title} author={book2.author} image={book2.image} price={book2.priceKWD}/>
      <BookItem title={book3.title} author={book3.author} image={book3.image} price={book3.priceKWD}/>
      {/* <BookItem title={books[3].title} author={books[3].author} image={books[3].image} price={books[3].priceKWD}/> */}
      <BookItem title={book3.title} author={book3.author} image={book3.image} price={book3.priceKWD}/>
      {/* <BookItem title={books[3].title} author={books[3].author} image={books[3].image} price={books[3].priceKWD}/> */}
      <BookItem title={book3.title} author={book3.author} image={book3.image} price={book3.priceKWD}/>
      <BookItem title={book3.title} author={book3.author} image={book3.image} price={book3.priceKWD}/>
      <BookItem title={book3.title} author={book3.author} image={book3.image} price={book3.priceKWD}/>

     
      </ScrollView>



    </View>

    
  );
}
