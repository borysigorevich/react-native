import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StyleProps} from "react-native-reanimated";

export const Box = (
    {
        children,
        style
    }: { children: ReactNode, style?: StyleProps }) => {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        padding: 20,
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})