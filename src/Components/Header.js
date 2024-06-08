import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANG } from "../Utils/constants";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const onSignoutHandle = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value)) ; 
  };

  return (
    //Netflix logo
    <div className="bg-gradient-to-b from-black absolute w-full z-50 flex flex-col md:flex-row justify-between ">
      <img className="w-48 mx-auto md:mx-0 brightness-110 " src={LOGO} alt="Logo" />

      {user && (
        <div className="flex flex-row md:flex-row text-white">
          { showGptSearch && 
          <select className="bg-gray-900 m-5 mt-7 p-0" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
            }
          
            <div className="mt-3 md:mr-40  mr-5">
            <button className="bg-purple-900 mt-4  ml-5 mr-4 md:mr-0  pr-2 p-1 rounded-lg font-bold" onClick={handleGptSearchClick}>{!showGptSearch ? "GPTSearch 🗺️" : "HomePage" } </button>
          </div>
          
            
          <div className="hidden md:inline-block w-14 p-2 mt-5 ">
            <img src={user?.photoURL} alt="UserPhoto"></img>
          </div>
          <div className="mt-2">
            <button
              className="font-bold p-1 m-4 mt-5 md:mt-6 ml-24 md:ml-4 bg-red-700 rounded"
              onClick={onSignoutHandle}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
