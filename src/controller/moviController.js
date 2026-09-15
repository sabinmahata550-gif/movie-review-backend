import { getMovieDetails, getPopularMovies, searchMovies } from "../services/moviService.js";

export const getPopular = async (req, res) => {
    try {
        const movies = await getPopularMovies();

        res.status(200).json({
            success: true,
            movies,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const getDetails = async (req, res) => {
  try {
    const movie = await getMovieDetails(req.params.movieId);

    res.status(200).json({
      success: true,
      movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const searchMovie = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    const movies = await searchMovies(query);

    res.status(200).json({
      success: true,
      movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};