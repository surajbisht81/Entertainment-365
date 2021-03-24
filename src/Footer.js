import React from 'react'
import "./Footer.css";
import { NavLink, useHistory } from "react-router-dom";

function Footer() {

    const history = useHistory();

    const handleClickButton = () => {
        history.push("/");
    }

    return (
        <div className="footer">
            <div className="header__left" onClick={handleClickButton}>
                <button> 365 </button>
            </div>
            <p>Powered by 365 Entertainment Portal 2019. All Right Reserved</p>
        </div>
    )
}

export default Footer
