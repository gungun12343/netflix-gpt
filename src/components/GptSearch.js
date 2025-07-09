import { useEffect } from "react"
import { GptMovieSuggestions } from "./GptMovieSuggestions"
import { GptSearchBar } from "./GptSearchBar"
import { useDispatch } from "react-redux"
import { changeLang } from "../utils/configSlice"

export const GptSearch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeLang("en"));
    }, [])

    return (
        <div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}