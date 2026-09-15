import tmdbFetch from "../utils/tmdbFetch.js";

export const getPopularMovies = async () => {
    const data = await tmdbFetch(
        "/movie/popular?language=en-US&page=1"
    );

    return data.results;
};

export const getMovieDetails = async (movieId) => {
    return await tmdbFetch(
        `/movie/${movieId}?language=en-US&append_to_response=credits,videos`
    );
};

export const searchMovies = async (query) => {
    const data = await tmdbFetch(
        `/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`
    );

    return data.results;
};