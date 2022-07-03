import { Box, ScrollView, Text,Image } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

const Category = (props) => {
  const [movies, setMovies] = useState([]);

  const API_HEADER = "https://api.themoviedb.org/3";

  const img_base_url = "https://image.tmdb.org/t/p/original/";

  const { title, url, navigation } = props;

  const getMoviesData = () => {
    return fetch(`${API_HEADER}${url}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMoviesData();
  }, []); 

  return (
    <Box mt="15">
      <Text color="white" fontSize={20} mx="5">
        {title}
      </Text>
      <ScrollView horizontal showHorizontalScrollIndicator={false} mx="3" my="3">
        {movies &&
          movies.map((movie, index) => (
            <TouchableOpacity
              key={index}
              style={{marginHorizontal: 5}}
              onPress={() =>
                navigation.push("MovieDetail", {
                  name:
                    movie.title || movie.original_title || movie.original_name,
                  id: movie.id,
                })
              }
            >
              <Image
                source={{ uri: `${img_base_url}${movie.poster_path}` }}
                w="100" h="140" borderRadius="10" alt="poster" 
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Box>
  );
};

export default Category;