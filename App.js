import React, { useEffect, useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform,StatusBar } from "react-native";
import Card from "./components/Card";
import { NavigationContainer,DefaultTheme,DarkTheme } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";
import useAuth, { AuthProvider } from "./context/useAuth";
import LoggedInStack from "./navigation/LoggedInStack";
import LoggedOutStack from "./navigation/LoggedOutStack";
import { auth } from "./firebase";
import LoginScreen from "./screens/Login";

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};





export default function App() {


  const [user, setUser] = useState(null);

  //const {user} = useAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Auth state changed to " + user?.name);
        setUser(user);
      } else {
        console.log("Auth state changed to " + null);
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  


  
  return (
    <NativeBaseProvider> 
      <NavigationContainer theme={DarkTheme}>
        <AuthProvider>
            {/* <Navigation /> */} 
            {user ? <LoggedInStack /> : <LoginScreen />}
        </AuthProvider>
        <StatusBar style='light' /> 
      </NavigationContainer>
    </NativeBaseProvider>
      
  );
}
