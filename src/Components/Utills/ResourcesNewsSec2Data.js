import React from 'react'

const ResourcesNewsSec2Data = (props) => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-5 col-lg-4">
                <div className="res-news-card card " style={{ width: `19rem`, padding: `20px` }}>
                    <img src={props.resImg} className="card-img-top" alt="..." />
                    <div>
                        <p className="card-text text-center fs-6">{props.resPara}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResourcesNewsSec2Data
