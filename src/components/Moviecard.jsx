import Modal from './Modal'
import { useState } from 'react'

import {  GoStar } from "react-icons/go";

function Moviecard(props) {
    
    const [isOpen, updateisOpen] = useState(false)

    const openHandler = (id) => {
        updateisOpen(true)
       

    }

    const closeHandler = () => {
        updateisOpen(false)
    }

    const { eachshow, displayData } = props;
//    console.log(eachshow)
    
    return (
       <>
        <Modal eachshow={eachshow} isOpen={isOpen} closeHandler={closeHandler}/>

        <div onClick={ openHandler}className="movie-card">
               
                   
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
        </>
    )
}

export default Moviecard


