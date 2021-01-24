import React from 'react'
import '../../Pages/Styles/About.css'

const AboutSection3Data = (props) => {
    return (
        <>
            <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex flex-column align-items-center about_card">
                    <h1 className="display-4">{props.abtText}</h1>
                    <span className="fs-6">{props.abtSpan}</span>
                </div>
            </div>
        </>
    )
}

export default AboutSection3Data
