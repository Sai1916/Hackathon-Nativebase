import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth";
import { auth } from "../firebase";
import firebase from "firebase";

const AuthContext = createContext({});

const config = {
  androidClientId:
    "895179956262-6qd05rcjoe88n396itruim74cgqgpsbg.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email"],
};

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [userEmail, setUserEmail] = useState();

    
    useEffect(
      () =>
        auth.onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        }),
      []
    );
  
    const GoogleLogin = async () => {
      await Google.logInAsync(config)
        .then(async (loginResult) => {
          if (loginResult.type === "success") {
            console.log(loginResult);
            const { idToken, accessToken,userDetails } = loginResult;
            const credential = firebase.auth.GoogleAuthProvider(
              idToken,
              accessToken
            );
            console.log("credential", credential);
            await auth.signInWithCredentail(credential);
            setUser(userDetails);
          }
          return Promise.reject();
        })
        .catch((err) => setError(err));
    };

    async function signInWithGoogleAsync() {
      try {
        const result = await Google.logInAsync({
          androidClientId:  '895179956262-6qd05rcjoe88n396itruim74cgqgpsbg.apps.googleusercontent.com',
          androidStandaloneAppClientId: 'AIzaSyDB4uhvU2K7If2Uw5uJ0nezLneEVTRJrwk',
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          console.log(result.user)
          setUserDetails(result.user);
          setUser(result.user.email);
          await auth.signInWithRedirect(provider);
          return result.user;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }

  
    console.log("in useAuth", user);

    const Login = async (email, password) => {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("Login Successful", email, password);
          setUser(user?.providerData[0]);
          setUserEmail(user?.providerData[0]?.email);
        })
        .catch((error) => Alert.alert(error.message));
    };
  
    const signOutHandler = async () => {
      await auth.signOut();
    };
  
    return (
      <AuthContext.Provider
        value={{
          user,
          userEmail,
          GoogleLogin,
          Login,
          signInWithGoogleAsync,
          signOutHandler,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default function useAuth() {
    return useContext(AuthContext);
  }