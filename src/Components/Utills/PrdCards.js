import React from 'react'

const PrdCards = (props) => {

   
    return (
        <>
            <div className="card prd-card">
                <i className={props.AppiconName}></i>
                <div className="card-body">
                    <p className="card-text text-center">{props.AppiconTextOne}<br /> {props.AppiconTextTwo}</p>
                </div>
            </div>
        </>
    )
}

export default PrdCards
