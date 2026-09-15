import Watchlist from "../model/Watchlist.js";

export const addToWatchlist = async (userId, movieId) => {
    const existingMovie = await Watchlist.findOne({
        user: userId,
        movieId,
    });

    if (existingMovie) {
        throw new Error("Movie is already in your watchlist");
    }

    return await Watchlist.create({
        user: userId,
        movieId,
    });
};

export const getMyWatchlist = async (userId) => {
    return await Watchlist.find({
        user: userId,
    }).sort({ createdAt: -1 });
};

export const removeFromWatchlist = async (userId, movieId) => {
    const movie = await Watchlist.findOneAndDelete({
        user: userId,
        movieId,
    });

    if (!movie) {
        throw new Error("Movie not found in your watchlist");
    }

    return movie;
};