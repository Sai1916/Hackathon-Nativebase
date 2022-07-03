import { View, Text } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import BannerContent from '../components/BannerContent'
import Movies from './Movies'
import { ScrollView } from 'native-base' 

const Home = ({navigation}) => {
  return (
    <SafeAreaView> 
      <ScrollView>
        <BannerContent />
        <Movies navigation={navigation} />
      </ScrollView>  
    </SafeAreaView>
  )
}

export default Home