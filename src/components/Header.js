import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                navigate("/browse");
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

    return (
        <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img 
                className="w-40" 
                src={LOGO} 
            />

            {user !== null &&
            <div className="flex flex-col">
                <div onClick={toggle} className="flex items-center mr-10 cursor-pointer">
                    <img className="w-10 h-10 cursor-pointer" src={USER_AVATAR} />
                    <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-white" />
                </div>

                {isOpen && 
                <div className="flex gap-2 flex-col bg-black absolute mt-16 right-4 p-3">
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