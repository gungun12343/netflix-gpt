import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                // navigate("/browse");
                if (location.pathname === "/") {
                    navigate("/browse");
                }
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLang(e.target.value));
    }

    return (
        <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center justify-between">
            <img 
                className="w-40" 
                src={LOGO} 
            />

            {user !== null &&
            <div className="flex w-full justify-between md:w-auto">

                { showGptSearch && 
                <select className="bg-gray-900 text-white px-2 mr-3 border border-gray-500 rounded-md cursor-pointer"
                    onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Spanish</option>
                </select>}

                <button onClick={handleGptSearchClick} className="mr-2 bg-white text-black text-lg font-bold py-1 px-4 rounded-md">
                    {showGptSearch ? "Homepage" : "Search"}
                </button>
                
                <div onClick={toggle} className="flex items-center mr-10 cursor-pointer">
                    <img className="w-10 h-10 cursor-pointer" src={USER_AVATAR} />
                    <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-white invisible md:visible" />
                    <button onClick={handleSignOut} className="md:invisible font-bold text-white">Sign Out</button>
                </div>

                {isOpen && 
                <div className="invisible md:visible flex gap-2 flex-col bg-black absolute mt-16 right-4 p-3 z-50">
                    <p className="text-white border-b border-gray-500">{user.displayName}</p>
                    <p className="text-white border-b border-gray-500">Manage profiles</p>
                    <p className="text-white border-b border-gray-500">Your Account</p>
                    <p className="text-white border-b border-gray-500">Help center</p>
                    <button onClick={handleSignOut} className="font-bold text-white">Sign Out of Netflix</button>
                </div>}
                
            </div>}
        </div>
    )
}

export default Header;