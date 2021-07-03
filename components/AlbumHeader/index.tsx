import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Album } from '../../types'
import { styles } from './style'

export type AlbumHeaderProps = {
    album: Album
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.album.imageUrl }} />
            <Text style={styles.title}>{props.album.name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.by}>By {props.album.by}</Text>
                <Text style={styles.likes}>{props.album.numberOfLikes} Likes</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AlbumHeader
