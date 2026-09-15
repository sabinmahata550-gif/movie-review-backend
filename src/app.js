import express from "express";

import userRouter from "./routes/userRoute.js";
import reviewRoutes from "./routes/reviewRoute.js";
import movieRoutes from "./routes/moviRoute.js";
import watchRoute from "./routes/watchRoute.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Movie Review Backend is running 🚀"
    });
});
app.use("/api/users", userRouter);
app.use("/api/movies", movieRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/watchlist", watchRoute);

export default app;