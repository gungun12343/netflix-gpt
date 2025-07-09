import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

export const GptSearchBar = () => {
    const language = useSelector((store) => store.config?.lang);

    return (
        <div className="">
            <form className="pt-[7%] bg-black text-white flex flex-col items-start px-14 gap-3 pb-2">
                <p>{lang[language].para}</p>
                <input className="bg-zinc-700 w-1/3 p-2 rounded-md" placeholder={lang[language].gptSearchPlaceholder} type="text" />
                <button className="bg-zinc-900 px-6 py-1 border border-gray-600 rounded-md">{lang[language].recommend}</button>
            </form>
        </div>
    )
}