import React from 'react';
import {Pressable, Text} from "react-native";

type CustomButtonIosProps = {
    onPress: () => void
    title: string
}

const CustomButton = (
    {
        title, onPress
    }: CustomButtonIosProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
                borderRadius: 5,
                padding: 10
            }}
        >
            <Text
                style={{
                    color: 'blue',
                    fontSize: 20
                }}
            >
                {title}
            </Text>
        </Pressable>
    );
};

export default CustomButton;