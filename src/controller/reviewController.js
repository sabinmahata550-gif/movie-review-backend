import {
  createReview,
  getMovieReviews,
  getMyReviews,
  updateReview,
  deleteReview,
  getMovieStats,
} from "../services/reviewService.js";

export const create = async (req, res) => {
  try {
    const review = await createReview(req.user.id, req.body);

    res.status(201).json({
      message: "Review created successfully",
      review,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getMovieReviewsController = async (req, res) => {
  try {
    const { movieId } = req.params;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await getMovieReviews(
      movieId,
      page,
      limit
    );

    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMine = async (req, res) => {
  try {
    const reviews = await getMyReviews(req.user.id);

    res.status(200).json({
      message: "Your reviews fetched successfully",
      reviews,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const updatedReview = await updateReview(
      req.params.id,
      req.user.id,
      req.body
    );

    res.status(200).json({
      message: "Review updated successfully",
      review: updatedReview,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await deleteReview(req.params.id, req.user.id);

    res.status(200).json({
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};


export const getMovieStatsController = async (req, res) => {
  try {
    const { movieId } = req.params;

    const stats = await getMovieStats(movieId);

    return res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};