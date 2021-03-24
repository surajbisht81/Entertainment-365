import React from 'react'
import "./All.css"
import Items from './Items'

function SciFic() {
    return (
        <div className="all">
            <div className="all__items">
                <Items img="https://i.ebayimg.com/images/g/nI8AAOxyzTJTjjDv/s-l300.jpg"
                    text="Intersteller"       
                />
                <Items img="https://images-na.ssl-images-amazon.com/images/I/A16XEWILpEL._AC_SL1500_.jpg"
                    text="Star Wars"       
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRce6aCSm2BKf4k2RtBLg1iAmYXZ7lFBRQPtA&usqp=CAU"
                    text="Thor"       
                />
                <Items img="https://images-na.ssl-images-amazon.com/images/I/91lHdPt5YML._AC_SY741_.jpg"
                    text="Captain America"      
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5VBB4xldA2jkBQ84mIu1zoAFwFEhEdhdyQ&usqp=CAU"
                    text="X-Men"       
                />
            </div>

            <div className="all__items">
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHAtPQrkBhk5KiqU87UJPOerOJNO4JZU2C0lBLQ4pzJFP1mnY0"
                    text="Black Widow"       
                />
                <Items img="https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg"
                    text="Iron Man"       
                />
                 <Items img="https://images-na.ssl-images-amazon.com/images/I/61ikONHVOAL._AC_SY741_.jpg"
                    text="Hulk"       
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVZmcXN30YTgsq3WZdzjFylDxTVvWz_aBag&usqp=CAU"
                    text="Captain Marvel"      
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_bL1lmInFATFFyRKaoXhgRQMyGN3XaItlQ&usqp=CAU"
                    text="Wonder Woman"       
                />
            </div>

            <div className="all__items">
               <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSpWm45MT6UI0zYsuqpEivG8_VUUtb-hvmA&usqp=CAU"
                    text="Gravity"       
                />
                <Items img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mars-movie-poster-design-template-068767c75f0e7126ebaff42e9db95b25_screen.jpg?ts=1581831565"
                    text="Mars"      
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_bL1lmInFATFFyRKaoXhgRQMyGN3XaItlQ&usqp=CAU"
                    text="Wonder Woman"       
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOqS_c7q4k6lOjCJsgvNtX95CiBj1KznvDA&usqp=CAU"
                    text="Martian"       
                />
                <Items img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFq0wkjdOSHf2ofH7Fht3eyzoBhev2f-wyYQ&usqp=CAU"
                    text="Bat Woman"       
                />
            </div>
        </div>
    )
}

export default SciFic
