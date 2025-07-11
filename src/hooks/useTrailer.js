import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailer = useSelector((store) => store.movies?.trailer);

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const res = json.results.filter((video) => video.type === "Trailer");
        const trailer = res.length ? res[0] : json.results[0];
        dispatch(addTrailer(trailer.key));
    }

    useEffect(() => {
        !trailer && getMovieVideos();
    }, [])
}