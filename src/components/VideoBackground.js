import { useSelector } from "react-redux";
import { useTrailer } from "../hooks/useTrailer";

export const VideoBackground = ({movieId}) => {
    useTrailer(movieId);

    const trailerId = useSelector((store) => store.movies?.trailer);

    return (
        <div className="">
            <iframe 
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&loop=1&mute=1&controls=0"}
                // src="https://www.youtube.com/embed/hXzcyx9V0xw?&autoplay=1&loop=1&mute=1&controls=0"
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
        </div>
    )
}