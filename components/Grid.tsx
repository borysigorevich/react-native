import React from 'react';
import {View, Text} from "react-native";

type GridProps = {
    name: string;
}

export const Grid = ({name}: GridProps) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
};