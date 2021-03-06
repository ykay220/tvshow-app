import Modal from './Modal'
import {motion, AnimatePresence} from 'framer-motion'
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

    const { eachshow, displayData, showsData } = props;
//    console.log(eachshow)
    



    return (
       <>
        <Modal eachshow={eachshow} isOpen={isOpen} closeHandler={closeHandler}/>

        <motion.div
             initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
                transition: {
                    delay: 0.3
                }
                
            }}
        onClick={ openHandler}className="movie-card">
               
            
            <div className="image-container">
            { eachshow.show.image ?.medium ? (<img src={eachshow.show.image.medium}/>)  : (<img src="https://www.carlscards.com/wp-content/uploads/2020/05/No-Image.jpg"/>)  }
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
            
           
        </motion.div>
        </>
    )
}

export default Moviecard


