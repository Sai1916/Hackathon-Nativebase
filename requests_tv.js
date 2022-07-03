import { API_KEY } from "./requests";

const requests = [
    {
        "title": "Popular",
        "url": `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        "title": "Top Rated",
        "url": `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        "title": "TV on the air",
        "url": `/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        "title": "TV Airing Today",
        "url": `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        "title": "Comedy",
        "url": `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
        "title": "Horror",
        "url": `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    { 
        "title": "Romance", 
        "url": `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        "title": "Documentaries",
        "url": `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
]

export default requests;