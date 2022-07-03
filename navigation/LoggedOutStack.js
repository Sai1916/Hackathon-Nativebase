import { View, Text } from 'react-native'
import React from 'react'
import { Box, Button, Center } from 'native-base'
import * as Google from 'expo-google-app-auth';
import useAuth from '../context/useAuth';
import LoginScreen from '../screens/Login';


const LoggedOutStack = () => {
  

  // First- obtain access token from Expo's Google API
  // const { type, accessToken, user } = await Google.logInAsync({
  //   androidClientId : '895179956262-6qd05rcjoe88n396itruim74cgqgpsbg.apps.googleusercontent.com',
  //   androidStandaloneAppClientId: 'AIzaSyDB4uhvU2K7If2Uw5uJ0nezLneEVTRJrwk',
  // });

  // if (type === 'success') {
  //   // Then you can use the Google REST API
  //   let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
  //     headers: { Authorization: `Bearer ${accessToken}` },
  //   });
  // }


  // async function signInWithGoogleAsync() {
  //   try {
  //     const result = await Google.logInAsync({
  //       androidClientId:  '895179956262-6qd05rcjoe88n396itruim74cgqgpsbg.apps.googleusercontent.com',
  //       androidStandaloneAppClientId: 'AIzaSyDB4uhvU2K7If2Uw5uJ0nezLneEVTRJrwk',
  //       scopes: ['profile', 'email'],
  //     });
  
  //     if (result.type === 'success') {
  //       console.log(result.user)
  //       return result.accessToken;
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     return { error: true };
  //   }
  // }



  const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" 
                options={{
                    headerShown: false,
                }}
                component={LoginScreen}/>
            <Stack.Screen 
                options={{
                    headerShown: false,
                }}
                name="SignUpScreen" 
                component={SignUp}
            />
        </Stack.Navigator>
    )
} 


  const {signInWithGoogleAsync} = useAuth();

  return (
    <Center>
      <Box h="100%" justifyContent="center"> 
        <Button success 
        onPress={signInWithGoogleAsync}
        >Click here to login with Google</Button>
      </Box>
    </Center>
  )
}

export default LoggedOutStack