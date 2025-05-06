import BookList from "@/components/BookList";
import CategoryBadge from "@/components/CategoryBadge";
import { ScrollView, View } from "react-native";

export default function Index() {
  //TS

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: "row",
        }}
      >
        <CategoryBadge genreName="Fiction" />
        <CategoryBadge genreName="Self Help" />
        <CategoryBadge genreName="Horror" />
        <CategoryBadge genreName="Classics" />
        <CategoryBadge genreName="Philsophy" />
        <CategoryBadge genreName="YA" />
        <CategoryBadge genreName="Comedy" />
        <CategoryBadge genreName="Arabic" />
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <BookList />
      </ScrollView>
    </View>
  );
}
