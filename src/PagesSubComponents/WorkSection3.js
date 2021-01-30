import React, { useState } from "react"


let WorkSection3 = (props) => {
    
    let increasingNumber = () => {
            props.setnumber(props.number + 4)
    }

    return(
        <div className="WorkSection3">
            <button onClick={increasingNumber}>Load More</button>
        </div>
    )
}

export default WorkSection3