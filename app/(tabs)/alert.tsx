import React from 'react';
import {Alert, Button, View} from "react-native";

const AlertComponent = () => {
    return (
        <View style={{
            paddingTop: 50
        }}>
            <Button title={'Show alert'}
                    onPress={() => {
                        Alert.alert('Title', 'Message', [
                            {
                                onPress: () => {
                                    console.log('OK Pressed')
                                },
                                text: 'OK'
                            },
                            {
                                onPress: () => {
                                    console.log('Cancel Pressed')

                                },
                                text: 'Cancel'
                            }
                        ])
                    }}
            />

        </View>
    );
};

export default AlertComponent;