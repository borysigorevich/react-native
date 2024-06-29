import {PokemonCard} from "@/components/PokemonCard";
import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text} from "react-native";

const charmanderData = {
    name: "Charmander",
    image: require("../../assets/images/pokemons/chermander.webp"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
};

const Pokemons = () => {
    return (
        <SafeAreaView
            style={[styles.container, {
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }]}
        >
            <Text>Pokemons</Text>
            <PokemonCard
                {...charmanderData}
            />
        </SafeAreaView>
    );
};

export default Pokemons;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    }
})