import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const StylesheetPage = () => {
    return (
        <View
            style={styles.container}
        >
            <View style={[styles.box, styles.blueBox, styles.boxShadow]}>
                <Text>Blue box</Text>
            </View>

            <View style={[styles.box, styles.greenBox, styles.boxShadow]}>
                <Text>Green box</Text>
            </View>
        </View>
    );
};

export default StylesheetPage;

const styles = StyleSheet.create({
    container: {
        margin: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        gap: 10,
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    greenBox: {
        backgroundColor: 'green'
    },
    blueBox: {
        backgroundColor: 'blue'
    },
    boxShadow: {
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 25
    }
})