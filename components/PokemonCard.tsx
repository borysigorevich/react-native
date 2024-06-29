import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, View} from "react-native";

type PokemonCardProps = {
    name: string
    image: number
    type: string
    hp: number
    moves: string[]
    weaknesses: string[]
}

const getTypeDetails = (type: 'electric' | 'water' | 'fire' | 'grass' | string
) => {
    switch (type.toLowerCase()) {
        case "electric":
            return {borderColor: "#FFD700", emoji: "⚡"};
        case "water":
            return {borderColor: "#6493EA", emoji: "💧"};
        case "fire":
            return {borderColor: "#FF5733", emoji: "🔥"};
        case "grass":
            return {borderColor: "#66CC66", emoji: "🌿"};
        default:
            return {borderColor: "#A0A0A0", emoji: "❓"};
    }
};

export const PokemonCard = (
    {
        name, hp, moves, weaknesses, image, type
    }: PokemonCardProps) => {

    const {borderColor, emoji} = getTypeDetails(type);

    return (
        <ScrollView style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.hp}>
                    ❤️{hp}
                </Text>
            </View>

            <Image
                source={image}
                style={styles.image}
                resizeMode={'contain'}
            />

            <View style={styles.typeContainer}>
                <View style={[styles.badge, {borderColor}]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>
                    Moves: {moves.join(', ')}
                </Text>
            </View>

            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>
                    Weakness: {weaknesses.join(', ')}
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        margin: 16,
        borderRadius: 16,
        borderWidth: 2,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 3
            },
            android: {
                elevation: 5
            }
        })
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 32
        // objectFit: 'contain'
    },
    typeContainer: {
        marginTop: 16,
        alignItems: 'center'
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    movesContainer: {
        marginTop: 40
    },
    movesText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    weaknessContainer: {
        marginTop: 16
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})