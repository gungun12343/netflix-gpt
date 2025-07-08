import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const dispatch = useDispatch();
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMsg(message);

        if(message) return;

        //signin / signup 
        if(!isLoginForm) {
            //Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                    }).catch((error) => {
                        setErrorMsg(error.message);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"-"+errorMessage);
            });
        } else {
            //Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"-"+errorMessage);
            });
        }
    }

    const toggle = () => {
        setIsLoginForm(!isLoginForm);
    }

    return (
        <div>
            <Header />

            <div className="absolute m-auto">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-80 absolute flex flex-col gap-4 my-36 mx-auto left-0 right-0 w-1/3 p-8">
                <h2 className="text-white text-3xl font-bold">{isLoginForm ? "Sign In" : "Sign Up"}</h2>

                {!isLoginForm ? <input ref={name} className="bg-black border border-gray-600 p-3 rounded-md text-white" placeholder="Full Name" /> : ""}

                <input type="text" ref={email} placeholder="Email or mobile number" className="bg-black border border-gray-600 p-3 rounded-md text-white" />

                <input type="password" ref={password} placeholder="Password" className="bg-black border border-gray-600 p-3 rounded-md text-white" />

                {errorMsg != null ? <p className="text-red-700 font-bold text-lg py-2">{errorMsg}</p>: ""}

                <button className="bg-red-600 py-2 rounded-md text-white" onClick={handleButtonClick}>{isLoginForm ? "Sign In" : "Sign Up"}</button>

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