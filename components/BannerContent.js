import { View, Text, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel';
import data from '../assets/bannerData';
import Card from './Card';
import { Box, Center } from 'native-base';
 
const BannerContent = () => {

    const isCarousel = useRef(null);

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

  return (
    <Box mt="3"> 
      <Center>
        <Carousel 
            layout="default"
            layoutCardOffset={15}
            ref={isCarousel}
            data={data}
            renderItem={Card}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
            />
      </Center>
    </Box>
  )
}

export default BannerContent