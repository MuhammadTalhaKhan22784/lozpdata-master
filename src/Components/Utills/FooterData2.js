import React from 'react'

const FooterData2 = (props) => {
    return (
        <>
            <div className="footer-data-2">
                <h2>{props.ftName}</h2>
                <p>{props.ftText1}</p>
                <p>{props.ftText2}</p>
                <p>{props.ftText3}</p>
                <p>{props.ftText4}</p>
            </div>
        </>
    )
}

export default FooterData2
