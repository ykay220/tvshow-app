
import ReactDOM from 'react-dom';

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



  
if (isOpen) {
    return  (

        
        <>
            <div onClick={closeHandler} className="modal-backdrop"/>
            <div className="modal-box">
                <div className="modal-content">
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
                  
                    
                </div>
                {/* <button onClick={closeHandler}>close modal</button> */}
               
            </div>
        </>
    )

}

return null
};

export default Modal
