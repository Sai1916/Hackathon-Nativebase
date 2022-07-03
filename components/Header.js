import { Avatar, Box, HStack, Image, Text, View } from 'native-base'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import Home from '../screens/Home';
import TV from '../screens/TV';
import { auth } from '../firebase';
import useAuth from '../context/useAuth';
 
const Header = () => {
    const Drawer = createDrawerNavigator();

    const DrawerNav = () => {
        return( 
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="TV" component={TV} />
            </Drawer.Navigator>
        )
    }


    // const signOutHandler = async () => {
    //     await auth.signOut();
    // }

    const {signOutHandler} = useAuth();

  return ( 
    <Box w="100%" h='16' py='1' > 
        <HStack w="100%" jusyifyContent="space-between">
            <HStack  alignItems='center' justifyContent='space-around' mx='2'>
                <TouchableOpacity onPress={DrawerNav}>
                    <Ionicons name="menu" size={28} color="white" />
                </TouchableOpacity>
                    
                <Image source={require('../assets/logo.png')} alt="logo" w='60' h="16" resizeMode='cover' mx='2' borderRadius='30'/>  
            </HStack>
            <HStack left='50%' alignItems='center' justifyContent='space-around'>
                <Ionicons name="md-search-sharp" size={24} color="white" />
                <TouchableOpacity onPress={signOutHandler}>
                    <Avatar mx='4' bg="green.500" source={{
                        uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}></Avatar>
                </TouchableOpacity>
            </HStack>
        </HStack>
    </Box>
  )
}

export default Header