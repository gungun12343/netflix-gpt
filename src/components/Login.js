import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggle = () => {
        setIsLoginForm(!isLoginForm);
    }

    return (
        <div>
            <Header />

            <div className="absolute m-auto">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg" />
            </div>

            <form className="bg-black bg-opacity-80 absolute flex flex-col gap-4 my-36 mx-auto left-0 right-0 w-1/3 p-8">
                <h2 className="text-white text-3xl font-bold">{isLoginForm ? "Sign In" : "Sign Up"}</h2>

                {!isLoginForm ? <input className="bg-black border border-gray-600 p-3 rounded-md" placeholder="Full Name" /> : ""}

                <input type="text" placeholder="Email or mobile number" className="bg-black border border-gray-600 p-3 rounded-md" />

                <input type="password" placeholder="Password" className="bg-black border border-gray-600 p-3 rounded-md" />

                <button className="bg-red-600 py-2 rounded-md text-white">{isLoginForm ? "Sign In" : "Sign Up"}</button>

                { isLoginForm ? 
                <p className="text-gray-400">New to Netflix? 
                    <span className="text-white font-semibold cursor-pointer" onClick={toggle}> Sign up now.</span>
                </p> : 
                <p className="text-gray-400">Already registered? 
                    <span className="text-white font-semibold cursor-pointer" onClick={toggle}> Sign in now.</span>
                </p>
                }
            </form>
        </div>
    )
}

export default Login;