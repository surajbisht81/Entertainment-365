import React from 'react';
import "./Items.css";

function Items({img, text}) {
    return (
        <div className="items">
            <img src={img}/>
            <div className="text" > {text} </div>
        </div>
    )
}

export default Items;
