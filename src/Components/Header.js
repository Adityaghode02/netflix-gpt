import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";

const Header = () => {
 
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const onSignoutHandle = () =>{
    signOut(auth).then(() => {
      // navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  const user = useSelector(store => store.user);
  

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, 
        const { uid , email , displayName, photoURL } = user;
        dispatch(addUser({uid:uid , email:email , displayName:displayName , photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();

      },[])


  return (
    //Netflix logo
    <div className="absolute w-screen z-10 flex justify-between">
  
      <img className="w-48 brightness-110 "
        src={LOGO}
        alt="Logo"
      />
    
    {user &&  ( <div>
    <img src={user?.photoURL} alt="UserPhoto"></img>
    <button className="font-bold bg-red-300 p-2 m-2 rounded" onClick={onSignoutHandle}>Sign out</button>
    </div> ) }
    </div>

    
  );
};

export default Header;
