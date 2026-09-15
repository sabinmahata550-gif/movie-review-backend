import {
  addToWatchlist,
  getMyWatchlist,
  removeFromWatchlist,
} from "../services/watchService.js";

export const addWatchlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId } = req.body;

    const movie = await addToWatchlist(userId, movieId);

    return res.status(201).json({
      success: true,
      message: "Movie added to watchlist",
      movie,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getWatchlist = async (req, res) => {
  try {
    const userId = req.user.id;

    const movies = await getMyWatchlist(userId);

    return res.status(200).json({
      success: true,
      movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeWatchlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const movieId = Number(req.params.movieId);

    const movie = await removeFromWatchlist(userId, movieId);

    return res.status(200).json({
      success: true,
      message: "Movie removed from watchlist",
      movie,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};