import React from 'react'
import { View, Text, Image } from 'react-native'
import { Song } from '../../types'
import { styles } from './style'
export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    return (
        <View style={styles.container}>
            {/* Image Cover */}
            <Image
                source={{ uri: props.song.imageUrl }}
                style={styles.image}
            />
            {/* Title */}
            <View style={styles.rightContainer}>
                <Text style={styles.title}>
                    {props.song.title}
                </Text>
                {/* Artist */}
                <Text style={styles.artist}>
                    {props.song.artist}
                </Text>
            </View>
        </View >
    )
}

export default SongListItem
