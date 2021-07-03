import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import styles from "./styles"
import { Album } from '../../types'
import { useNavigation } from '@react-navigation/native'

export type AlbumProps = {
    album: Album
}

const AlbumContainer = (props: AlbumProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AlbumScreen', { id: props.album.id })
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUrl }} style={styles.image} />
                <Text style={styles.text}>{props.album.artistHeadline}</Text>
            </View>
        </TouchableWithoutFeedback >
    )
}

export default AlbumContainer

