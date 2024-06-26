import {Box} from "@/components/Box";
import React from 'react';
import {View} from "react-native";

const Flex = () => {
    return (
        <View style={{
            margin: 60,
            borderStyle: 'solid',
            borderWidth: 5,
            height: 500,
            borderColor: 'red',
            // flexDirection: 'row',
            // alignItems: 'flex-start',
            flexWrap: 'wrap',
            alignContent: 'space-between'
            // alignItems: 'flex-start',
            // justifyContent: 'space-evenly',
            // flex: 1
        }}>
            <Box style={{
                backgroundColor: '#8e9b00',
            }}>
                Box 1
            </Box>
            <Box style={{
                backgroundColor: '#b65d1f'
            }}>
                Box 2
            </Box>
            <Box style={{
                backgroundColor: '#1c4c56'
            }}>
                Box 3
            </Box>
            <Box style={{
                backgroundColor: '#ab9156'
            }}>
                Box 4
            </Box>
            <Box style={{
                backgroundColor: '#6b0803'
            }}>
                Box 5
            </Box>
            <Box style={{
                backgroundColor: '#2bb5ce'
            }}>
                Box 6
            </Box>
            <Box style={{
                backgroundColor: '#b95f21'
            }}>
                Box 7
            </Box>
        </View>
    );
};

export default Flex;