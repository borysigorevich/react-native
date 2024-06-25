import React from 'react';
import {Button, ImageBackground, Pressable, Text, View} from "react-native";
// @ts-ignore
import adaptiveIcon from '../../assets/images/adaptive-icon.png';

const Buttons = () => {
    return (
        <View style={{
            flex: 1,
            paddingTop: 50
        }}>
            <Text>Buttons</Text>

            {/*<Button*/}
            {/*    title={'Button'}*/}
            {/*    onPress={() => {*/}
            {/*        console.log('Button Pressed');*/}
            {/*    }}*/}
            {/*    color={'midnightblue'}*/}
            {/*/>*/}

            <Pressable
                onPress={() => {
                    console.log('Pressable Pressed')
                }}
                onPressIn={() => {
                    console.log('Pressable Pressed In')
                }}
                onPressOut={() => {
                    console.log('Pressable Pressed Out')
                }}
                onLongPress={() => {
                    console.log('Pressable Long Pressed')
                }}
            >
                <ImageBackground
                    source={adaptiveIcon}
                    style={{
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text>
                        Image Background
                    </Text>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

export default Buttons;