import { useEffect } from "react"
import { GptSearchBar } from "./GptSearchBar"
import { useDispatch } from "react-redux"
import { changeLang } from "../utils/configSlice"
import { BG_URL } from "../utils/constants"

export const GptSearch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeLang("en"));
    }, [])

    return (
        <div>
            <div className="absolute m-auto -z-10">
                            <img src={BG_URL} />
                        </div>
            <GptSearchBar />
        </div>
    )
}