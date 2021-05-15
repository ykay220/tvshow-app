import ReactDOM from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion'

function Modal(props) {
    const { isOpen, closeHandler,eachshow, info } = props;
// console.log(closeHandler)
// console.log(isOpen)
// console.log(info)
console.log(eachshow)

const removeTags = () => {
let oldString = eachshow.show.summary;
let betaString = oldString.replaceAll("<p>", "");
let betaString2 = betaString.replaceAll("</p>", "");
let alphaString = betaString2.replaceAll("<b>", "");
let finalString = alphaString.replaceAll("</b>", "");

return finalString
}



  


    return (
          <AnimatePresence>
              {isOpen && (
                  <>
                  <motion.div 
                      initial={{
                          opacity:0
                      }}
                      animate={{
                          opacity:1,
                          transition: {
                              duration: 0.2
                          }
                      }}
                      exit={{
                          opacity:0,
                          transition: {
                            delay: 0.2
                        }
                      }}
      
                  onClick={closeHandler} className="modal-backdrop"/>
      
                  <motion.div 
                       initial={{
                          opacity:0
                      }}
                      animate={{
                          opacity:1,
                          transition: {
                              duration: 0.2
                          }
                      }}
                      exit={{
                        opacity:0,
                        transition: {
                            delay: 0.2
                        }
                    }}
                      
                  className="modal-box">
                      <motion.div 
                           initial={{
                              x:100,
                              opacity:0
                          }}
                          animate={{
                              x:0,
                              opacity:1,
                              transition: {
                                  delay: 0.2
                              }
      
                          }}
                          exit={{
                              x:100,
                            opacity:0,
                            transition: {
                                duration: 0.2
                            }
                        }}
                      className="modal-content">
                          <div className="modal-imagewrap">
                              <img src={eachshow.show.image.medium} alt="" />
                          </div>
                          <div className="modal-text">
                              <h1>{eachshow.show.name}</h1>
                              <span>{eachshow.show.premiered}</span>
                              <span>{eachshow.show.runtime} mins</span>
                              <span>{eachshow.show.type}</span>
                              {
                                  eachshow.show.rating.average ?
                                  (
                                      <span>{eachshow.show.rating.average}</span>
                                  ) : <span>N/A</span>
                              }
                              <p>{removeTags()}</p>
                              <a href="">READ MORE</a>
                          </div>
                        
                          
                      </motion.div>
                      {/* <button onClick={closeHandler}>close modal</button> */}
                     
                  </motion.div>
              </>
              )}
            </AnimatePresence>
        
   
    );

   };


export default Modal
