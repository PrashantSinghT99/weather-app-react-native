import React from 'react';
import CurrentWeather from '../Screens/CurrentWeather';
import UpcomingWeather from '../Screens/UpcomingWeather';
import City from '../Screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
            }}>
            <Tab.Screen
                name="Current"
                component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}></Feather>
                    ),
                }}
            />
            <Tab.Screen
                name="Upcoming"
                component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}></Feather>
                    ),
                }}
            />
            <Tab.Screen
                name="City"
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'tomato' : 'black'}></Feather>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs