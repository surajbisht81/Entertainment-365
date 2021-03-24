import React from 'react'
import "./All.css";
import Items from './Items'

function Drama() {
    return (
        <div className="all">
            <div className="all__items">
                <Items img="https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg"
                    text="Dr Strange"      
                />
                 <Items img="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Aankhen_%282002%29.jpg/220px-Aankhen_%282002%29.jpg"
                    text="Aankhein"       
                />
                <Items img="https://rukminim1.flixcart.com/image/352/352/poster/j/a/y/vintage-bollywood-original-reprinted-dev-anand-s-guide-large-original-imae672zj8zbcysq.jpeg?q=70"
                    text="Guide"       
                />
                 <Items img="https://images-na.ssl-images-amazon.com/images/I/51BeEOPksOL._SY355_.jpg"
                    text="Deewar"       
                />
                <Items img="https://vistapointe.net/images/heaven-is-for-real-4.jpg"
                    text="Heaven is For Real"       
                />
            </div>
            
            <div className="all__items">
                <Items img="https://vistapointe.net/images/heaven-is-for-real-4.jpg"
                    text="Heaven is For Real"       
                />
                <Items img="https://images-na.ssl-images-amazon.com/images/I/71YR79Dv3sL._SY550_.jpg"
                    text="Bahuballi"      
                />
                <Items img="https://m.media-amazon.com/images/M/MV5BMzQwMDIyYTUtNDJhNi00N2RlLWEyNTctNDFjZTk0NTIwYzNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR1,0,182,268_AL_.jpg"
                    text="Shaurya"       
                />
                <Items img="https://i.pinimg.com/600x315/c5/46/7e/c5467e2adc2c081021f8f0e1dcbbe4b4.jpg"
                    text="Cheeni kam"       
                />
                <Items img="https://sahinahi-media.azureedge.net/movieposters/9F224591-9633-4687-8F96-CFD164192C16.png"
                    text="Ishq Vishq"       
                />
            </div>

            <div className="all__items">
                <Items img="https://www.filmibeat.com/ph-big/2014/07/kick-posters_140591766730.jpg"
                    text="kick"      
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9ouhuPvE6AoouDHWj2NLdWNNoUQr_EqCxg&usqp=CAU"
                    text="Mummy"       
                />
            </div>
            
        </div>
    )
}

export default Drama
