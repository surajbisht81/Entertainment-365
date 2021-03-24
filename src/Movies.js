import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import "./Movies.css";
import { Carousel } from "react-bootstrap";
import All from "./All";
import Action from "./Action";
import Drama from "./Drama";
import SciFic from "./SciFic";


function Movies() {

    const [gener, setGener] = useState("All");

    return (
        <div className="movies">
            <Header />

            <Carousel>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src="https://flixchatter.files.wordpress.com/2019/07/stuberbanner.jpg?w=640"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src="https://steam.cryotank.net/wp-content/gallery/ffxivarealmreborn/FF-XIV-A-Realm-Reborn-02-HD.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lPovfKPsvR9Vi5xDJHmdrL4NQp8gMj0F0A&usqp=CAU"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src="https://www.joblo.com/newsimages1/batbanner-big2.jpg"
                    alt="Fourth slide" />
                </Carousel.Item>
            </Carousel>

            <div className="genre__selection">
                <div className="genre__selection__upper">
                    <select value={gener} onChange={(e) => { setGener(e.target.value)}}>
                        <option value="All"> All </option>
                        <option value="Action"> Action </option>
                        <option value="Drama"> Drama </option>
                        <option value="Sci-Fic"> SciFic </option>
                    </select>
                    <input type="text" placeholder="Search Your Favourite Movie Title"/>
                </div>
             
                <div className="genre__selection__lower">
                    {(() => {
            
                        switch (gener) {
                            case 'All':
                                return (
                                <All />
                                )
                            case 'Action':
                                return (
                                <Action />
                                )
                            case 'Drama':
                                return (
                                <Drama />
                                )
                            case 'Sci-Fic':
                                return (
                                <SciFic />
                            )
                            default:
                                return (
                                <All />
                            )
                        }

                    })()}
                </div>  
            </div>
            <Footer />
        </div>
    )
}

export default Movies
