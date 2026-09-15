import express from "express";

import {
  addWatchlist,
  getWatchlist,
  removeWatchlist,
} from "../controller/watchController.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, addWatchlist);

router.get("/", auth, getWatchlist);

router.delete("/:movieId", auth, removeWatchlist);

export default router;