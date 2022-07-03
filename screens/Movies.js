import { ScrollView } from "native-base";
import React from "react";
import requests from "../requests";
import Category from "./Category";

const Movies = ({ navigation }) => { 
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {requests && requests.map(({ title, url }, index) => (
        <Category key={index} title={title} url={url} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default Movies;