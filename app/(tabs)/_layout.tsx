import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {Tabs} from 'expo-router';
import React from 'react';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="stylesheet"
                options={{
                    title: 'Stylesheet',
                }}

            />
            {/*<Tabs.Screen*/}
            {/*    name="index"*/}
            {/*    options={{*/}
            {/*        title: 'View/ScrollView',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tabs.Screen*/}
            {/*    name="buttons"*/}
            {/*    options={{*/}
            {/*        title: 'Buttons',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tabs.Screen*/}
            {/*    name="modals"*/}
            {/*    options={{*/}
            {/*        title: 'Modals',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tabs.Screen*/}
            {/*    name="status-bar"*/}
            {/*    options={{*/}
            {/*        title: 'Status Bar',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tabs.Screen*/}
            {/*    name="alert"*/}
            {/*    options={{*/}
            {/*        title: 'Alert',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tabs.Screen*/}
            {/*    name="explore"*/}
            {/*    options={{*/}
            {/*        title: 'Explore',*/}
            {/*    }}*/}
            {/*/>*/}
        </Tabs>
    );
}
