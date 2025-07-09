import {IMG_CDN_URL} from "../utils/constants";

export const MovieCard = ({data}) => {
    const {poster_path} = data;

    return (
        <div className="w-60 flex-shrink-0 pr-2">
            <img src={IMG_CDN_URL+poster_path} />
        </div>
    )
}