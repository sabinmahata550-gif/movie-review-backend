import Review from "../model/Review.js";

export const createReview = async (userId, data) => {
  const { movieId, rating, review, verdict, recommend } = data;

  const existingReview = await Review.findOne({
    user: userId,
    movieId,
  });

  if (existingReview) {
    throw new Error("You have already reviewed this movie");
  }

  const newReview = await Review.create({
    user: userId,
    movieId,
    rating,
    review,
    verdict,
    recommend,
  });

  return newReview;
};

export const getMovieReviews = async (movieId,page = 1,limit = 10) => {
  const skip = (page - 1) * limit;

  const reviews = await Review.find({ movieId })
    .populate("user", "name")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalReviews = await Review.countDocuments({ movieId });

  return {
    reviews,
    pagination: {
      currentPage: page,
      limit,
      totalReviews,
      totalPages: Math.ceil(totalReviews / limit),
    },
  };
};


export const getMyReviews = async (userId) => {
  const reviews = await Review.find({ user: userId })
    .sort({ createdAt: -1 });

  return reviews;
};

export const updateReview = async (reviewId, userId, data) => {
  const review = await Review.findOne({
    _id: reviewId,
    user: userId,
  });

  if (!review) {
    throw new Error("Review not found or you are not allowed to update it");
  }

  const { rating, review: reviewText, verdict, recommend } = data;

  if (rating !== undefined) review.rating = rating;
  if (reviewText !== undefined) review.review = reviewText;
  if (verdict !== undefined) review.verdict = verdict;
  if (recommend !== undefined) review.recommend = recommend;

  await review.save();

  return review;
};

export const deleteReview = async (reviewId, userId) => {
  const review = await Review.findOneAndDelete({
    _id: reviewId,
    user: userId,
  });

  if (!review) {
    throw new Error("Review not found or you are not allowed to delete it");
  }

  return review;
};


export const getMovieStats = async (movieId) => {
  const reviews = await Review.find({ movieId });

  if (reviews.length === 0) {
    return {
      totalReviews: 0,
      averageRating: 0,
      verdicts: {
        perfectMovie: 0,
        goForIt: 0,
        timePass: 0,
        wasteOfTime: 0,
      },
    };
  }

  const totalRating = reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );

  const averageRating = totalRating / reviews.length;

  const verdicts = {
    perfectMovie: 0,
    goForIt: 0,
    timePass: 0,
    wasteOfTime: 0,
  };

  reviews.forEach((review) => {
    if (verdicts[review.verdict] !== undefined) {
      verdicts[review.verdict]++;
    }
  });

  return {
    totalReviews: reviews.length,
    averageRating: Number(averageRating.toFixed(1)),
    verdicts,
  };
};