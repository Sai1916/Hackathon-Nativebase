import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
//import { Input } from "react-native-elements";
import useAuth from "../context/useAuth";
import { AntDesign, Feather, MaterialIcons } from "react-native-vector-icons";
import { Text, View,Input } from "native-base";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login } = useAuth();

  return (
    <View
        flex='1'
        alignItems='center'
        justifyContent ='center'
        backgroundColor = 'blue.200'
    >
      {/* <ImageBackground
        source={require("../assets/bg-logo.png")}
        resizeMode="cover"
        style={styles.bg}
      > */}
        <View w="85%" py='10' my='20' backgroundColor="rgba(255, 255, 255, 0.7)" alignItems='center' borderRadius='30'>
          <View mx='10'>
            {/* <Input
              placeholder="Email"
              style={styles.input}
              required={true}
              value={email}
              textContentType="emailAddress"
              onChangeText={(val) => setEmail(val)}
              leftIcon={<MaterialIcons name="email" size={24} color="black" />}
            />

            <Input
              placeholder="Password"
              style={styles.input}
              required={true}
              value={password}
              textContentType="password"
              onChangeText={(val) => setPassword(val)}
              secureTextEntry={true}
              leftIcon={<Feather name="lock" size={24} color="black" />}
            /> */}

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
            onPress={() => Login(email, password)}
          >
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signtext}>
            <Text>Don't have an account?</Text>
            <Text
              style={styles.signup}
              onPress={() => navigation.push("SignUpScreen")}
            >
              SignUp
            </Text>
          </View>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default LoginScreen;


const styles =  StyleSheet.create({
    button: {
         padding: 8,
        width: "70%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 40,
        marginVertical: 20,
        backgroundColor: "#DB4700",
    },
    input: {
        height: 35,
        opacity: 1,
        width: 100,  
      },
})