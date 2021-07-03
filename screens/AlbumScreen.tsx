import { useRoute } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import albumDetails from '../data/albumDetails'
import SongListItem from '../components/SongListItem'


const AlbumScreen = () => {

    const route = useRoute()

    useEffect(() => {
        console.log(route)
    })

    return (
        <SafeAreaView>
            <View>
                <Text style={{ color: "white" }}>
                    Album Screen
                </Text>
                <SongListItem song={albumDetails.songs[0]} />
            </View>
        </SafeAreaView>
    )
}

export default AlbumScreen
