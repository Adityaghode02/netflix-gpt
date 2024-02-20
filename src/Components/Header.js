import React from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

  const navigate = useNavigate();

  const onSignoutHandle = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  const user = useSelector(store => store.user);
  
  return (
    //Netflix logo
    <div  className="absolute z-10 flex justify-between">
    <div>
      <img className="w-48 brightness-110  "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
    
    </div>
    {user && <div>
    <img src={user?.photoURL} alt="UserPhoto"></img>
    <button className="font-bold bg-red-300 p-2 m-2 rounded" onClick={onSignoutHandle}>Sign out</button>
    </div>}
    </div>

    
  );
};

export default Header;
