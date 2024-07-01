import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View} from "react-native";

const Inputs = () => {
    const [name, setName] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    return (
        <SafeAreaView
        >
            <ScrollView style={styles.container}>
                <TextInput
                    // secureTextEntry
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                    placeholder={'Enter your name'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />

                <Text style={styles.name}>
                    {name}
                </Text>


                <TextInput
                    multiline
                    style={[styles.input, {
                        height: 200,
                        textAlignVertical: 'top', // for android2
                    }]}
                    placeholder={'Text area'}
                />


                <View
                    style={styles.switchContainer}
                >
                    <Text>Dark Mode: </Text>
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                        style={{
                            alignSelf: 'flex-start'
                        }}
                        trackColor={{
                            false: 'cyan',
                            true: 'yellow'
                        }}
                        thumbColor={'red'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Inputs;

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    input: {
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 12
    },
    switchContainer: {}
})