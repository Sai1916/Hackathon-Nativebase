import { View, Text } from 'react-native'
import React from 'react'
import {firebase, db } from '../firebase'

const SignUp = ({navigation}) => {

    const SignUpDb = async() => {
        const authUser = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log('Account creation Successful',email,password);

        dbcollection("users").add({
            userId: authUser.user?.uid,
            email: authUser.user?.email,
        })
}


    return (
        <View
            flex='1'
            alignItems='center'
            justifyContent ='center'
            backgroundColor = 'blue.200'
        >
        
            <View w="85%" py='10' my='20' backgroundColor="rgba(255, 255, 255, 0.7)" alignItems='center' borderRadius='30'>
              <View mx='10'>
    
            <Input variant="outline" placeholder="Email" w="100%" my='4'
                value={email}
                textContentType="emailAddress"
                onChangeText={(val) => setEmail(val)}
            />
            <Input variant="outline" placeholder="Password" w="100%" my='4'
                value={password}
                textContentType="password"
                onChangeText={(val) => setPassword(val)}
                secureTextEntry={true}
            />
    
              </View>
              <View flexDirection='row'
                alignItems= 'center'
                justifyContent= "space-between"
                mx='5'
                >
                <View flexDirection='row'
                alignItems= 'center' >
                  <AntDesign name="checkcircle" size={14} />
                  <Text>Remember me</Text>
                </View>
                <Text>Forgot Password?</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={SignUpDb}
              >
                <Text style={styles.btntext}>Login</Text>
              </TouchableOpacity>
              <View style={styles.signtext}>
                <Text>Don't have an account?</Text>
                <Text
                  style={styles.signup}
                  onPress={() => navigation.replace("Login")}
                >
                  SignUp
                </Text>
              </View>
            </View>
        </View>
      );
    }

export default SignUp