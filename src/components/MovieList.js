import { MovieCard } from "./MovieCard"

export const MovieList = ({title, movies}) => {
    if(!movies) return;

    return (
        <div className="pl-10 pb-5">
            <h1 className="py-4 text-white">{title}</h1>

            <div className="flex overflow-x-scroll no-scrollbar">
                {movies.map((movie) => <MovieCard key={movie.id} data={movie} />)}
            </div>
        </div>
    )
}