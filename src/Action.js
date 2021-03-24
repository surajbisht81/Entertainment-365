import React from 'react';
import "./All.css";
import Items from './Items';

function Action() {
    return (
        <div className="all">
            <div className="all__items">
                <Items img="https://i1.sndcdn.com/artworks-000090906371-xp3hmm-t500x500.jpg"
                    text="Haider"       
                />
                <Items img="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Student_of_the_year_2_Poster.jpg/220px-Student_of_the_year_2_Poster.jpg"
                    text="Student Of The Year"      
                />
                <Items img="https://www.joblo.com/assets/images/oldsite/posters/images/full/2005-batman_begins-6.jpg"
                    text="Batman"       
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSh4WpSbih1S8dm5_ionG_eUYLsHqG-2q4g&usqp=CAU"
                    text="Monster Manav"       
                />
                <Items img="https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL._AC_SY450_.jpg"
                    text="Kill Bill"       
                />
            </div>
            <div className="all__items">
                <Items img="https://www.filmibeat.com/ph-big/2012/06/rowdy-rathore_133852620020.jpg"
                    text="Rowdy Rathor"       
                />
            </div>
        </div>
    )
}

export default Action
