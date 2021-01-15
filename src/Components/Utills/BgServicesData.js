import React from 'react'

const BgServicesData = (props) => {
    return (
        <>
             <div className="bg-service-Text">
                    <h1 className="display-5">{props.bgText}</h1>
                    <p>{props.bgPara}</p>
                </div>
        </>
    )
}

export default BgServicesData
