import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
const song =
{
    id: "3",
    imageUrl: "https://images.genius.com/75065a7d64ab8906fc585a98a7c7ab98.1000x1000x1.jpg",
    title: 'Wylinka',
    artist: 'Słoń',
}


const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            {/* Image Cover */}
            <Image
                source={{ uri: song.imageUrl }}
                style={styles.image}
            />
            {/* Title */}
            <View style={styles.rightContainer}>
                <View style={styles.name}>
                    <Text style={styles.title}>
                        {song.title}
                    </Text>
                    {/* Artist */}
                    <Text style={styles.artist}>
                        {song.artist}
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="hearto" size={30} color={"white"} />
                    <FontAwesome name="play" size={30} color={"white"} />
                </View>
            </View>
        </View >
    )
}

export default PlayerWidget
