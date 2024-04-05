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
    <div className="absolute w-full z-50 flex justify-between p-0 m-0">
      <img className="w-48 brightness-110 " src={LOGO} alt="Logo" />

      {user && (
        <div className="flex text-white">

          <select className="bg-gray-900 m-5 p-1" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>

          { !showGptSearch && 
            <div className="mt-3 mr-40">
            <button className="bg-purple-700 m-2 p-2 rounded-2xl font-bold" onClick={handleGptSearchClick}>GPT Search  🗺️</button>
          </div>
          }
            
          <div className="w-14 p-3 mt-2">
            <img src={user?.photoURL} alt="UserPhoto"></img>
          </div>
          <div className="mt-2">
            <button
              className="font-bold p-2 m-2 bg-blue-700 rounded"
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
