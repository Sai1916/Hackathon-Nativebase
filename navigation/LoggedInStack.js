import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import TV from '../screens/TV';
import {Ionicons,Feather,MaterialIcons} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailScreen from '../screens/MovieDetail';
import Header from '../components/Header';

const LoggedInStack = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
        initialRouteName="HomeScreen" 
        screenOptions={{
            tabBarIconStyle: {
                color: "#32a852",
            },
            tabBarActiveBackgroundColor: "#8987ff",
            tabBarActiveTintColor: "white",
            tabBarItemStyle: {
                borderRadius: 50,
                marginHorizontal: 12,
            },
            tabBarStyle: {
                paddingVertical: 2,
            },
            }} 
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        
        options={{
             headerTitle: (props) => <Header {...props} />,
            tabBarIcon: ({ color }) => (
               <Feather name="home" size={24} color={ color } />
            ),
        }}
       /> 
      <Tab.Screen 
        name="TV" 
        component={TV}
        options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <Feather name="tv" size={24} color={ color } />
            ),
        }}
       />
      <Tab.Screen 
        name="Movies" 
        component={TV}
        options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="movie-filter" size={24} color={ color } />
            ),
        }}
       />
      <Tab.Screen 
        name="Sports" 
        component={TV}
        options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="sports-cricket" size={24} color={ color } />
            ),
        }}
       />
    </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" 
                options={{
                    headerShown: false,
                }}
                component={Home}/>
            <Stack.Screen 
                options={{
                    headerShown: false,
                }}
                name="MovieDetail" 
                component={MovieDetailScreen}
            />
        </Stack.Navigator>
    )
} 


export default LoggedInStack