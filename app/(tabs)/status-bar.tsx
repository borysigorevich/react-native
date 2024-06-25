import React, {useState} from 'react';
import {View, StatusBar, ActivityIndicator, Button} from "react-native";

const StatusBarComponent = () => {
    const [animating, setAnimating] = useState(false)

    const handlePress = () => {
        if(animating) return
        console.log('here')

        setAnimating(true)

        setTimeout(() => {
            setAnimating(false)
        }, 2000)
    }

    return (
        <View
            style={{
                backgroundColor: 'plum',
                flex: 1,
                paddingTop: 50
            }}
        >
            <StatusBar
                // barStyle={'light-content'}
            />
            <Button
                title={'Toggle Activity Indicator'}
                onPress={handlePress}
            />

            <ActivityIndicator
                animating={animating}
                size={'large'}
                color={'red'}
            />
        </View>
    );
};

export default StatusBarComponent;