import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { Box, Button, Image, VStack } from 'native-base'

const Card = ({item,index}) => {
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
 
  return (
    <Box bg="blue.300" key={index} w="100%" h="180" alignItems={"center"} borderRadius="20" rounded="lg">
       
       <Image source={{uri:item.imgUrl}} size="sm" resizeMode={"cover"} alt="image" w={ITEM_WIDTH} h="100%" borderRadius="20" rounded="lg"/>
          {/* <ImageBackground source={{uri: item.imgUrl}}  style={{ width: "100%", height: "100%", resizeMode: "cover" }}>
            <Text color="primary">{item.title}</Text>
            <Text color="primary">{item.body}</Text>
          </ImageBackground> */}
    </Box>
  )
}

export default Card