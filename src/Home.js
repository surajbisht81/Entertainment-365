import React from 'react';
import "./Home.css";
import Header from "./Header";
import { Carousel } from "react-bootstrap";
import {url} from "./Util";
import Items from "./Items";
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Header />
            
            {/* bootstrap */}

            <Carousel>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src="https://m.media-amazon.com/images/M/MV5BODA5OGJiZDUtZjcwYi00YjA2LWIwYTYtMzFlNTc1NWYyMmVkXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src="https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/700/-/0/27/72/1669d99020a111e9b8038d7d33e42024_1548592118514_l_medium.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src={url}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="first_image"
                    src="https://i.pinimg.com/originals/cd/9f/19/cd9f19fa85ac40ee71a9cf0caecc1b94.jpg"
                    alt="Fourth slide" />
                </Carousel.Item>
            </Carousel>

            {/* Rest of part */}
            <div className="popular__type">
                <h2> Popular in Action</h2>
                <div className="popular__type__parts">
                   <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbHIwAKkB-Xs1vzK63GGGkFAYV1e4Unv4-w&usqp=CAU"
                          text="Star Wars"       
                    />
                    <Items img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRELEr5bWH1Z9ZlYjofDbRoW0ToFJop6YlcJuVU8lAYt2peph_n"
                          text="Extractions"       
                    />
                    <Items img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmNxk-6SuWiBM1ekS6IC8tsWKibAr0XTEOfMkE3i4Ak_164hw2"
                          text="Mulan"       
                    />
                    <Items img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvGNXRmC76GfZrgM7P_oY0nZqg00bsjC7E5zu4dZBReXiHD_kt"
                          text="Venom"       
                    />
                    <Items img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGJXiU9sSwPUqoSAS4jYwJ-_G0Oe-MVTu1084RYg5PwsEOuaaU"
                          text="Drive"       
                    />
                </div>
            </div>

            <div className="popular__type">
                    <h2> Popular in Drama</h2>
                    <div className="popular__type__parts">
                        <Items img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDExaaqvlXGem8TBU2lnCx4Ii0FoBnTjOH_ZIHpuFrHucXtxP5"
                            text="A Silent Voice"       
                        />
                        <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgFST-pqPgU9CcWUDE4xqqgSxB1n7dulszo08FjRyXyCxV8TH"
                            text="Parasite"       
                        />
                        <Items img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGZKZ3mjsk8jXAbTKsj_yXLhRmDRRoS0_8IjZfn6q1ZpUbhzSY"
                            text="Sound of Metal"       
                        />
                        <Items img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSycffZmfdX7IgT0g4OltIo8B_-CcIaSHrp6tdMg_zhz9-vkCki"
                            text="sir"       
                        />
                        <Items img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRE6eZz2BcViaq02dj7t5mhx0wFyYAguEPxBgV_mItUyS3Xwlm-"
                            text="Favourite"       
                        />
                    </div>
            </div>

            <div className="popular__type">
                    <h2> Popular in Sci Fiction</h2>
                    <div className="popular__type__parts">
                        <Items img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT47RFDMFuIaqvIf2ihomC2Ung69HlBleD-L3L8NjPkKEbJGUot"
                            text="Underwater"       
                        />
                        <Items img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBaUnEiR3_ECzj1M938GGRDFJkNoBXa6-"
                            text="Parasite"       
                        />
                        <Items img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXGhTKWQyvDmdM0Fv3Q4rI9lCZ895vBoT8vPv_1NmvvRbI8JUt"
                            text="The Beach House"       
                        />
                        <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lE3vu7Fn01M2z99MyxuJhgKkRYcqv4w3fXZnAtd7lrBEJHs4"
                            text="The Five Wave"       
                        />
                        <Items img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS1RJJUBGRZFEzfSmdG4biDlXDAhsrpvgwLWkO-wSIfyePuZJAj"
                            text="Annihilation"       
                        />
                    </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home;
