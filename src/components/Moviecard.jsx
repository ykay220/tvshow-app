import React from 'react'
import { GoPlus, GoStar } from "react-icons/go";

function Moviecard(props) {
    const { eachshow } = props;
    console.log(eachshow)
    return (
        <div className="movie-card">
        
            <div className="image-container">
                <img src={eachshow.show.image.medium} alt="" />
            </div>
           
            <div className="card-info">
           
                <div className="card-text">
                    <p>{eachshow.show.name}</p>
                    <p>{eachshow.show.type}</p>
                         <div className="rating-wrap">
                             <p><GoStar/>{eachshow.show.rating.average ? (eachshow.show.rating.average) : ('No rating')}</p>
                        </div>
                        
                    
                </div>
                
            </div>
            
           
        </div>
    )
}

export default Moviecard


