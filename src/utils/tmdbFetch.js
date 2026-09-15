import config from "../config/config.js";

const TMDB_URL = "https://api.themoviedb.org/3";

const tmdbFetch = async (url) => {
    const response = await fetch(`${TMDB_URL}${url}`, {
        headers: {
            Authorization: `Bearer ${config.tmdbAccessToken}`,
            accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("TMDB request failed");
    }

    return response.json();
};

export default tmdbFetch;