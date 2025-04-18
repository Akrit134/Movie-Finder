const API_KEY = "d8e877861dbd93bf9cf7f4f2ed3f0f96";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {

    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {

    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};