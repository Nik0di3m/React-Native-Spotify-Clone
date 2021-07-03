import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import AlbumCategory from '../components/AlbumCategory'
import { albumCategories } from '../data/albumCategires'


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={albumCategories}
          renderItem={({ item }) => (
            <AlbumCategory
              title={item.title}
              albums={item.albums}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View >
    </SafeAreaView>
  )
}

export default HomeScreen
