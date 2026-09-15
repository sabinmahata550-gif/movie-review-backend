import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import reviewRoutes from "./routes/reviewRoute.js"
import movieRoutes from "./routes/moviRoute.js"
import watchRoute from "./routes/watchRoute.js"
import dotenv from "dotenv"
dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use("/api/users",userRouter)

app.use("/api/movies", movieRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/watchlist", watchRoute);
export default app;