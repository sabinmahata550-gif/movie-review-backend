import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT || 5000,
    mongoUrl: process.env.MONGODB_URL,
    jwtSecret: process.env.JWT_SECRET,
      tmdbAccessToken: process.env.TMDB_ACCESS_TOKEN,
};

export default config;