import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const DynamicUi = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text
                    style={styles.text}
                >Welcome</Text>
            </View>
        </View>
    );
};

export default DynamicUi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 300,
        height: 300,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24
    }
})