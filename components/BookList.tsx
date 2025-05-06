import books from '@/data/Books'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import BookItem from './BookItem'

const BookList = () => {
    const bookDisplay = books.map((bookItem)=>{ //books[0]
        return(
          <BookItem book={bookItem}/>
        )
      })
  return (
    <View>
      {bookDisplay}
    </View>
  )
}

export default BookList

const styles = StyleSheet.create({})