// @ts-ignore
import CustomButton from "@/components/CustomButton/CustomButton";
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View, SafeAreaView, Platform, StatusBar} from "react-native";

const DynamicUi = () => {

    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.box, {
                width: windowWidth > 500 ? '70%' : '90%',
                height: windowHeight > 600 ? '60%' : '90%',
            }]}>
                <Text
                    style={{
                        ...Platform.select({
                            ios: {
                                color: 'blue'
                            },
                            android: {
                                color: 'red'
                            }
                        }),
                        fontSize: windowWidth > 5000 ? 50 : 24
                    }}
                >Welcome</Text>

                <CustomButton
                    title={'Press Me'}
                    onPress={() => {
                        console.log('pressed')
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default DynamicUi;

// const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
        backgroundColor: 'plum',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    box: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
})