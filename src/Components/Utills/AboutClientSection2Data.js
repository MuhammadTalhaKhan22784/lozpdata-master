import React from 'react'
import '../../Pages/Styles/About.css'
const AboutClientSection2Data = (props) => {
    return (
        <>
            <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                <div className="abt-client-imgs">
                    <img
                    src={props.clientImage}
                    />
                </div>
            </div>
        </>
    )
}

export default AboutClientSection2Data
