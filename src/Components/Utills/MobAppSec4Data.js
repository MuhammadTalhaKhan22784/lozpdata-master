import React from 'react'

const MobAppSec4Data = (props) => {
    return (
        <>
            <div className={props.isDown ? `sec4cardsitem down` : `sec4cardsitem`}>
                <div>
                    <img src={props.sImg} alt="phototectimage" />
                    <h2>{props.sText}</h2>
                    <p>{props.sPara}</p>
                </div>
            </div>
        </>
    )
}

export default MobAppSec4Data
