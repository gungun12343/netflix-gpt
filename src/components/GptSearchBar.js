import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";

export const GptSearchBar = () => {
    const language = useSelector((store) => store.config?.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async() => {
        // console.log(searchText.current.value);
        // //Make an API call to GPT API and get movie results
        // // const gptQuery = "Act as a movie recommendation system and suggest some movies for the query"+searchText.current.value+". Only give me names of 5 movies";

        // // const gptResults = await openai.chat.completions.create({
        // //     model: 'gpt-3.5-turbo',
        // //     messages: [{ role: 'user', content: gptQuery }],
        // // });

        // // console.log(gptResults.choices);
    }

    return (
        <div className="pt-[10%] flex justify-center">
            
            <form className="bg-black text-white flex flex-col items-start mx-5 px-14 gap-3 w-full md:w-1/2 py-7"
                onSubmit={(e) => e.preventDefault()}>
                <p>{lang[language].para}</p>
                <input ref={searchText} className="bg-zinc-700 w-full p-2 rounded-md" placeholder={lang[language].gptSearchPlaceholder} type="text" />
                <button onClick={handleGptSearchClick} className="bg-zinc-900 px-6 py-1 border border-gray-600 rounded-md">{lang[language].recommend}</button>
            </form>
        </div>
    )
}