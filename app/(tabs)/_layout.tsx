import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {Tabs} from 'expo-router';
import React from 'react';

const routesToHide = [
    'stylesheet',
    'index',
    'flex',
    'buttons',
    'modals',
    'status-bar',
    'alert',
    'explore',
]

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={({route, }) => ({
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            })}
        >
            <Tabs.Screen
                name="stylesheet"
                options={{
                    title: 'Stylesheet',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'View/ScrollView',
                    href: null,
                }}
            />

            <Tabs.Screen
                name="flex"
                options={{
                    title: 'Flex',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="buttons"
                options={{
                    title: 'Buttons',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="modals"
                options={{
                    title: 'Modals',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="status-bar"
                options={{
                    title: 'Status Bar',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="alert"
                options={{
                    title: 'Alert',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="dynamic-ui"
                options={{
                    title: 'Dynamic UI',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="pokemons"
                options={{
                    title: 'Pokemons',
                    href: null,
                }}
            />
            <Tabs.Screen
                name="lists"
                options={{
                    title: 'Lists',
                }}
            />
        </Tabs>
    );
}
