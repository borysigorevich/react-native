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
                borderRadius: 20,
                padding: 10
            }}
        >
            <Text
                style={{
                    color: 'purple',
                    fontSize: 18
                }}
            >
                {title}
            </Text>
        </Pressable>
    );
};

export default CustomButton;