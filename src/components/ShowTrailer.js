import { useParams } from "react-router-dom"
import { useTrailer2 } from "../hooks/useTrailer2";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";

export const ShowTrailer = () => {
    const [key, setKey] = useState(null);
    const [details, setDetails] = useState(null);
    const {movieId} = useParams();

    

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const res = json.results.filter((video) => video.type === "Trailer");
        const trailer = res.length ? res[0] : json.results[0];
        setKey(trailer.key);
    }

    const getMovieData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'?language=en-US', API_OPTIONS);
        const json = await data.json();
        setDetails(json);
    }
    
    useEffect(() => {
        getMovieVideos();
        getMovieData();
    }, [movieId])
    
    if(details === null) return;
    const {original_title} = details;
    
    return (
        <>
        <Header />
        <div className="flex flex-col justify-center items-center relative z-10 pt-[30%] md:pt-[5%]">
            <h2 className="text-white text-5xl p-3 font-bold">{original_title}</h2>

            <iframe 
                className="w-[80%] md:w-[60%] md:h-[500px] mt-7 aspect-video"
                src={"https://www.youtube.com/embed/"+key}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
        </div>
        </>
    )
}