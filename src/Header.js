import React from 'react'
import "./Header.css";
import { NavLink, useHistory } from "react-router-dom";

function Header() {

   const history = useHistory();

   const handleClick = () => {
       history.push("/Movies");
   }
   
   const handleClickButton = () => {
       history.push("/");
   }

    return (
        <div  className="header" >
            <div className="header__left" onClick={handleClickButton}>
                <button >
                    365
                </button>
            </div>

            <div className="header__right">
                <p onClick={handleClick}>
                  Movies 
                </p>
                <p> TV Series </p>
                <p> Audio</p>
            </div>
        </div>
    )
}

export default Header
