export const API_KEY = "796582a8773b51fe608b5f4f0eef6d20";

const requests = [
    {
        "title": "Trending",
        "url": `/trending/all/week?api_key=${API_KEY}`,
    },
    {
        "title": "Neflix Originals",
        "url": `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        "title": "Top Rated",
        "url": `/movie/top_rated?api_key=${API_KEY}`,
    },
    {
        "title": "Action",
        "url": `/discover/movie?api_key=${API_KEY}&with_genres=28`,
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