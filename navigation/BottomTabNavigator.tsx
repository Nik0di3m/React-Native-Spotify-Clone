/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, EvilIcons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import MyLibraryScreen from '../screens/MyLibraryScreen';
import PremuimScreen from '../screens/PremuimScreen';
import SearchScreen from '../screens/SearchScreen';
import { BottomTabParamList, TabFourParamList, TabOneParamList, TabThreeParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="My Library"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="folder-music" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

const TabThreeNavigator = () => {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="My Library"
        component={MyLibraryScreen}
        options={{ headerShown: false }}
      />
    </TabThreeStack.Navigator>
  )
}

const TabFourStack = createStackNavigator<TabFourParamList>();

const TabFourNavigator = () => {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Premium"
        component={PremuimScreen}
        options={{ headerShown: false }}
      />
    </TabFourStack.Navigator>
  )
}