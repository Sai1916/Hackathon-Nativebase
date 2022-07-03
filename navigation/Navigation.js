import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoggedInStack from './LoggedInStack';
import LoggedOutStack from './LoggedOutStack';
import { auth } from '../firebase';
import useAuth from '../context/useAuth';
import LoginScreen from '../screens/Login';
import SignUp from '../screens/SignUp';
//import {createNativeStackNavigator} from '';



const Navigation = () => {

//     const { user, isAuthenticated } = useAuth();
//     const loginWithRedirect = useLoginWithRedirect();


//     // Uncomment this to redirect to login automatically
//   useEffect(() => {
//     if (!isAuthenticated) {
//   loginWithRedirect();
//     }
//   }, [isAuthenticated, loginWithRedirect]);

//   const logout = () => {
//     const baseUrl = ContextHolder.getContext().baseUrl;
//     window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
//   };

//   // admin user
//   const handleClick = () => {
//     AdminPortal.show()
//   }

// const [user, setUser] = useState(null);

// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged((user) => {
//     if (user) {
//       setUser(user);
//     } else {
//       setUser(null);
//     }
//   });
//   return unsubscribe();
// }, []); 

const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  return () => {
    unsubscribe();
  };
}, []);


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




    return <>
        {user ? <LoggedInStack /> : <LoginStack />}
    </>
  
}

export default Navigation