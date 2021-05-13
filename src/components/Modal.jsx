
import ReactDOM from 'react-dom';

function Modal(props) {
    const { isOpen, closeHandler,eachshow, info } = props;
// console.log(closeHandler)
// console.log(isOpen)
// console.log(info)
console.log(eachshow)

  
if (isOpen) {
    return  (

        
        <>
            <div onClick={closeHandler} className="modal-backdrop"/>
            <div className="modal-box">
                <button onClick={closeHandler}>close modal</button>
                <h1>{eachshow.show.name}</h1>
            </div>
        </>
    )

}

return null
};

export default Modal
