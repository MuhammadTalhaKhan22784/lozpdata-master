import React from 'react'

const MVPDevelopmentCardsData = (props) => {
    return (
        <>

            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="s1-card">
                    <div className="d-flex justify-content-between align-items-center s1-card-para">
                        <h2 className="s1-icon text-center">{props.cardNum}</h2>
                        <p>{props.cardText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MVPDevelopmentCardsData
