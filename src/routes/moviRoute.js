import express from "express";
import { getDetails, getPopular, searchMovie } from "../controller/moviController.js";

const router = express.Router();

router.get("/popular", getPopular);
router.get("/search", searchMovie);

router.get("/:movieId", getDetails);

export default router;