import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useEffect } from 'react'
import { Audio } from 'expo-av'
import { useState } from 'react'
import { Sound } from 'expo-av/build/Audio'


const song =
{
    id: "3",
    uri: "https://niko-music.s3.eu-central-1.amazonaws.com/Lipa+-+Bezprawie+ft.+Kabe.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-BHdTrqZcYckbNzNe-LPSuUw-t500x500.jpg",
    title: 'Bezprawie',
    artist: 'Lipa feat Kabe',
}



const PlayerWidget = () => {

    const [sound, setSound] = useState<Sound | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [duration, setDuration] = useState<number | null>(0)
    const [position, setPosition] = useState<number | null>(0)

    const onPlaybackStatusUpdate = (status) => {
        console.log(status)
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
    }

    const playCurrentSong = async () => {

        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: true },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        //play the song
        playCurrentSong();
    }, [])

    const onPlayPausePlay = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.pauseAsync()

        } else {
            await sound.playAsync()

        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }

        return (position / duration) * 100;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progressBar, { width: `${getProgress()}%` }]}>

            </View>
            <View style={styles.player}>
                {/* Image Cover */}
                <Image
                    source={{ uri: song.imageUrl }}
                    style={styles.image}
                />
                {/* Title */}
                <View style={styles.rightContainer}>
                    <View style={styles.name}>
                        <Text style={styles.title}>
                            {song.title} |
                        </Text>
                        {/* Artist */}
                        <Text style={styles.artist}>
                            {song.artist}
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <AntDesign name="hearto" size={30} color={"white"} />
                        <TouchableOpacity onPress={onPlayPausePlay}>
                            <FontAwesome name={isPlaying ? "pause" : "play"} size={30} color={"white"} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </View >
    )
}

export default PlayerWidget
