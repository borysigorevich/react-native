import {Grid} from "@/components/Grid";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import adaptiveIcon from '../../assets/images/adaptive-icon.png';

export default function HomeScreen() {
    return (
            <View style={{
                paddingTop: 50,
                backgroundColor: 'plum',
                flex: 1
            }}>
                <ScrollView>
                    <View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'cyan'
                }}>
                    <Grid
                        name={'Grid'}
                    /><Grid
                        name={'Grid 1'}
                    />
                </View>
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200'
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200'
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200'
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200'
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200'
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                    <Image
                        source={{
                            uri: 'https://picsum.photos/200'
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />

                    <ImageBackground
                        source={adaptiveIcon}
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50
                        }}
                    >
                        <Text>Background image</Text>
                    </ImageBackground></ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
