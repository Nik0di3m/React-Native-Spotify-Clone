import { useRoute } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import albumDetails from '../data/albumDetails'
import SongListItem from '../components/SongListItem'
import AlbumHeader from '../components/AlbumHeader'


const AlbumScreen = () => {

    const route = useRoute()

    useEffect(() => {
        console.log(route)
    })

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={albumDetails.songs}
                    renderItem={({ item }) =>
                        <SongListItem song={item} />
                    }
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}

                />
            </View>
        </SafeAreaView>
    )
}

export default AlbumScreen
