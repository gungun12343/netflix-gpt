import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const VideoTitle = ({title, overview}) => {
    return (
        <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
            <h1 className="text-5xl font-extrabold">{title}</h1>
            <p className=" py-4 w-1/4">{overview}</p>

            <div>
                <button className="mr-1 border bg-white text-black py-1 px-4 rounded-sm font-medium hover:opacity-70"> 
                    <FontAwesomeIcon icon={faPlay} className="text-black" /> Play</button>
                <button className="bg-gray-600 py-1 px-4 rounded-sm text-white font-medium"> <FontAwesomeIcon icon={faCircleInfo} /> More Info</button>
            </div>
        </div>
    )
}