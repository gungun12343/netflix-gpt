import { Link } from "react-router-dom";
import {IMG_CDN_URL} from "../utils/constants";

export const MovieCard = ({data}) => {
    const {poster_path, id} = data;

    return (
        <div className="w-60 flex-shrink-0 pr-2">
            <Link to={"/trailer/"+id}><img src={IMG_CDN_URL+poster_path} /></Link>
        </div>
    )
}