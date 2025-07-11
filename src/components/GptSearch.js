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
        <>
            <div className="absolute m-auto -z-10">
                <img className="h-screen object-cover w-screen" src={BG_URL} />
            </div>
            <div className="pt-[30%] md:pt-0">
                <GptSearchBar />
            </div>
        </>
    )
}