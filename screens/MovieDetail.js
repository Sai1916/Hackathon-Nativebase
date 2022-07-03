import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import { API_KEY } from '../requests';

const MovieDetailScreen = ({navigation,route}) => {

    const {name, id} = route.params;

    const [movie,setMovie] = useState({})
    const [video,setVideo] = useState({})
    const [playTrailer,setPlayTrailer] = useState(false)

    const API_HEADER = "https://api.themoviedb.org/3";

    const getMovieData = () => {
        return fetch(`${API_HEADER}/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    const getMovieVideoData = () => { 
        return fetch(`${API_HEADER}/movie/${id}/videos?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setVideo(data?.results[0]?.key))
    }
     
    useEffect(() => {
        getMovieData();
        getMovieVideoData();
    },[])

    const playTrailerHandler = () => {
        setPlayTrailer(!playTrailer);
    }
    
    const {genres,spoken_languages} = movie

    console.log(movie)
    console.log(video)
    const img_base_url="https://image.tmdb.org/t/p/original/";

    return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{position:"absolute",marginTop:20,zIndex:100,marginLeft:20}}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                </TouchableOpacity>
                { playTrailer ? (
                    <View mt='9'>
                        <YoutubePlayer
                            videoId={video}
                            play={true}
                            height={200}
                        />
                    </View>
                    ) :
                    (
                        <View position='relative'>
                            <Image source={{uri: `${img_base_url}${movie.backdrop_path}`}} w="100%" h="240" resizeMode='cover' alt='backdrop'/>
                            <Text fontSize={24} fontWeight="bold" color="white" position="absolute" bottom={6} mx={14}>{name}</Text>
                        </View>
                    )
                } 
                <View mx="3" my="3">
                    <View flexDirection='row' flexWrap='wrap'>
                        {!!movie.tagline && (
                            <Text color='lightgray' fontSize='18' mx='1'>{movie.tagline}</Text>
                        )}
                    </View> 
                    <View flexDirection='row' justifyContent='space-around' my='4' >
                        <TouchableOpacity 
                            style={{padding:6,backgroundColor:"#c5e3e3",borderRadius:10,flexDirection:"row",alignItems:"center"}} onPress={playTrailerHandler}>
                            <MaterialCommunityIcons name="movie-filter" size={28} color="black"/>
                            <Text color="black" fontSize="18" mx='2' fontWeight='bold'>{playTrailer ? "Stop Trailer" : "Play Trailer"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:6,backgroundColor:"#c5e3e3",borderRadius:10,flexDirection:"row",alignItems:"center"}}>
                            <MaterialCommunityIcons name="movie-open-outline" size={28} color="black"/>
                            <Text color="black" fontSize="18" mx='2' fontWeight='bold'>Watch Movie</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:"#acadad",fontSize:16}}>{movie.release_date}{'     '}{movie.status}</Text>
                    {genres?.length>0 && (
                        <ScrollView horizontal style={{flexDirection:"row"}}>
                            <Text style={{color:"white",fontSize:16}}>Genre:</Text>
                            {genres?.map((genre,index) => (
                                <Text key={index} style={{color:"#acadad",fontSize:16,marginHorizontal:5}}>{genre.name}</Text>
                                ))}
                        </ScrollView>
                    )}
                    <ScrollView horizontal style={{flexDirection:"row"}}>
                        {spoken_languages?.length>0 && 
                            (
                                <>
                                    <Text style={{color:"white",fontSize:16}}>Languages:</Text>
                                    {spoken_languages?.map((lang,index) => (
                                        <Text key={index} style={{color:"#acadad",fontSize:16,marginHorizontal:5}}>{lang.english_name}</Text>
                                    ))}
                                </>
                            )
                        }
                    </ScrollView>
                    <View style={{flexDirection:"column"}}>
                        <Text style={{color:"white",fontSize:16}}>Overview:</Text>
                        <Text style={{color:"#acadad",fontSize:14}}>{movie.overview}</Text>
                    </View>
                    <Text style={{color:"white",fontSize:14}}>Vote Average: {movie.vote_average}</Text>
                    <Text style={{color:"white",fontSize:14}}>Duration: {movie.runtime}min</Text>
                </View>
            </ScrollView>
    )
}

export default MovieDetailScreen