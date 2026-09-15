import z, { minLength, maxLength, regex } from "zod";
import { GO_FOR_IT, PERFECT_MOVIE, TIME_PASS, WASTE_OF_TIME } from "../../constants/verdaict.js";

export const reviewSchema = z.object({
    movieId: z
        .number({
            error: "Movie ID is required",
        })
        .int("Movie ID must be an integer")
        .positive("Movie ID must be positive"),

    rating: z
        .number({
            error: "Rating is required",
        })
        .min(1, "Rating must be at least 1")
        .max(5, "Rating cannot be more than 5"),

    review: z
        .string({
            error: "Review is required",
        })
        .check(
            minLength(3, "Review must be at least 3 characters"),
            maxLength(1000, "Review is too long")
        )
        .trim(),

    verdict: z.enum([
       PERFECT_MOVIE,
        GO_FOR_IT,
        TIME_PASS,
        WASTE_OF_TIME
    ]),

    recommend: z.boolean().default(false),
});