import React from 'react'

function Moviecard(props) {
    const { eachshow } = props;
    
    return (
        <div>
            <h1>{eachshow.show.name}</h1>
        </div>
    )
}

export default Moviecard
