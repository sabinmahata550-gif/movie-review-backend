import express from "express";

import {
  create,
  getMine,
  update,
  remove,
  getMovieStatsController,
  getMovieReviewsController,
} from "../controller/reviewController.js";
import auth from "../middleware/auth.js";
import validate from "../middleware/validator.js";
import { reviewSchema } from "../libs/schema/reviewSchema.js";

const router = express.Router();

router.post("/", auth, validate(reviewSchema), create);

router.get("/movie/:movieId", getMovieReviewsController);

router.get("/my-reviews", auth, getMine);
router.get(
  "/movie/:movieId/stats",
  getMovieStatsController
);
router.put("/:id", auth, update);

router.delete("/:id", auth, remove);

export default router;