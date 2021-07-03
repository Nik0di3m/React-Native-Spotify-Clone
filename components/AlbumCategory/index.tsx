import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Album } from '../../types'
import AlbumContainer from '../Album'
import styles from "./styles"


export type AlbumCategoryProps = {
    title: string,
    albums: [Album]
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            {/* Title of category */}
            <Text style={styles.title}>{props.title}</Text>
            {/* List of albums */}
            <FlatList
                data={props.albums}
                renderItem={({ item }) => (
                    <AlbumContainer
                        album={item}
                    />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

export default AlbumCategory
