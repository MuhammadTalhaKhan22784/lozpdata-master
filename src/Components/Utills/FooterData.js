import React from 'react'

const FooterData = (props) => {
    return (
        <>
            <div className="footer-items ">
                <div className="ft-div-1">
                    <img src={props.countryImage} />
                    <h2>{props.countryName}</h2>
                </div>
                <div className="ft-div-2">
                    <p>{props.countryText}</p>
                </div>
                <div 
                style={{display: props.isShow ? `none` : `block`}}
                className="ft-div-3">
                    <span>Info@lozpdata.com</span>
                    <br/>
                    <span>+923028072696</span>
                </div>
            </div>
        </>
    )
}

export default FooterData
