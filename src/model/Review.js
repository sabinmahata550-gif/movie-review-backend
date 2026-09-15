import mongoose from "mongoose";
import { GO_FOR_IT, PERFECT_MOVIE, TIME_PASS, WASTE_OF_TIME } from "../constants/verdaict.js";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    movieId: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    review: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 1000,
    },

    verdict: {
      type: String,
      enum: [
        PERFECT_MOVIE,
        GO_FOR_IT,
        TIME_PASS,
        WASTE_OF_TIME
      ],
      required: true,
    },

    recommend: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;