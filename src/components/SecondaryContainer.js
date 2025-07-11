import { useSelector } from "react-redux"
import { MovieList } from "./MovieList"

export const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    const nowPlayingMovies = movies?.nowPlayingMovies;
    const popularMovies = movies?.popularMovies;
    const trendingMovies = movies?.trendingMovies;
    const upcomingMovies = movies?.upcomingMovies;
    const topRatedMovies = movies?.topRatedMovies;

    return (
        <div className="bg-black">
            <div className="mt-[10%] md:-mt-52 relative z-10">
                <MovieList title="Now Playing" movies={nowPlayingMovies} />
                <MovieList title="Popular" movies={popularMovies} />
                <MovieList title="Trending" movies={trendingMovies} />
                <MovieList title="Upcoming" movies={upcomingMovies} />
                <MovieList title="Top Rated" movies={topRatedMovies} />
            </div>
        </div>
    )
}