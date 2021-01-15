import React from 'react'

const ResNewsSec3Data = (props) => {
    return (
        <> 
             <div className="res-news-cards">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <div className="news-card-1">
                            <img src={props.cardImage} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="news-card-2">
                            <h2>{props.cardText}</h2>
                            <p>{props.cardPara}</p>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                        <div className="news-btn">
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ResNewsSec3Data
