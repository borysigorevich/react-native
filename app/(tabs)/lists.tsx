import sectionListData from "@/section-list.json";
import React from 'react';
import {Platform, SafeAreaView, SectionList, StatusBar, Text, View} from "react-native";

const Lists = () => {

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'plum',
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                // paddingHorizontal: 25
            }}
        >
            {/*<ScrollView*/}
            {/*    style={{*/}
            {/*        paddingHorizontal: 25*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {pokemonsList.map((pokemon) => (*/}
            {/*        <View key={pokemon.id} style={{*/}
            {/*            flexDirection: "row",*/}
            {/*            gap: 8*/}
            {/*        }}>*/}
            {/*            <Text>{pokemon.name}:</Text>*/}
            {/*            <Text>{pokemon.type}</Text>*/}
            {/*        </View>*/}
            {/*    ))}*/}
            {/*</ScrollView>*/}

            {/*<FlatList*/}
            {/*    data={pokemonsList}*/}
            {/*    renderItem={(info) => {*/}
            {/*        const item = info.item*/}
            {/*        return <View key={item.id} style={{*/}
            {/*            flexDirection: "row",*/}
            {/*            gap: 8,*/}
            {/*            borderRadius: 20,*/}
            {/*            borderWidth: 2,*/}
            {/*            borderColor: '#000',*/}
            {/*            borderStyle: 'solid',*/}
            {/*            padding: 24*/}
            {/*        }}>*/}
            {/*            <Text>{item.name}:</Text>*/}
            {/*            <Text>{item.type}</Text>*/}
            {/*        </View>*/}
            {/*    }}*/}
            {/*    keyExtractor={(item) => item.id}*/}
            {/*    ItemSeparatorComponent={(props, context) => {*/}
            {/*        console.log({props, context})*/}
            {/*        return <View style={{*/}
            {/*            height: 16*/}
            {/*        }}/>*/}
            {/*    }}*/}
            {/*    ListEmptyComponent={(props, context) => {*/}
            {/*        console.log({props, context}, 'List Empty')*/}
            {/*        return <View>*/}
            {/*            <Text>No Pokemons</Text>*/}
            {/*        </View>*/}
            {/*    }}*/}
            {/*    ListHeaderComponent={(props, context) => {*/}
            {/*        return <View style={{*/}
            {/*            padding: 16,*/}
            {/*            marginBottom: 16,*/}
            {/*            borderBottomWidth: 2,*/}
            {/*            borderColor: '#000',*/}
            {/*            borderStyle: 'solid'*/}
            {/*        }}>*/}
            {/*            <Text*/}
            {/*                style={{*/}
            {/*                    fontSize: 24*/}
            {/*                }}*/}
            {/*            >Pokemons</Text>*/}
            {/*        </View>*/}
            {/*    }}*/}
            {/*    ListFooterComponent={(props, context) => {*/}
            {/*        return <View style={{*/}
            {/*            padding: 16,*/}
            {/*            marginTop: 16,*/}
            {/*            borderTopWidth: 2,*/}
            {/*            borderColor: '#000',*/}
            {/*            borderStyle: 'solid'*/}
            {/*        }}>*/}
            {/*            <Text*/}
            {/*                style={{*/}
            {/*                    fontSize: 24*/}
            {/*                }}*/}
            {/*            >End of the List</Text>*/}
            {/*        </View>*/}
            {/*    }}*/}
            {/*/>*/}

            <SectionList
                sections={sectionListData}
                renderSectionHeader={({section}) => {
                    return <View >
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 24
                        }}>
                            {section.type}
                        </Text>
                    </View>
                }}
                ItemSeparatorComponent={() => <View style={{height: 16}}/>}
                SectionSeparatorComponent={() => <View style={{height: 20}}/>}
                renderItem={({item}) => {
                    return <View style={{
                        flexDirection: "row",
                        gap: 8,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: '#000',
                        borderStyle: 'solid',
                        padding: 24
                    }}>
                        <Text>{item}</Text>
                    </View>
                }}

            />
        </SafeAreaView>
    );
};

export default Lists;