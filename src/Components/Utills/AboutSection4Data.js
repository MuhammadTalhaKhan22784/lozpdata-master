import React from 'react'
import Fade from 'react-reveal/Fade';

const AboutSection4Data = (props) => {
    return (
        <>
            <div className="col-lg-4">
                <Fade right duration={2000} delay={200}>
                    <div className="abt-sec-4-cards">
                        <h2 className="fs-2 lh-base mb-4">{props.abtText}</h2>
                        <p className="fs-5">{props.abtPara}</p>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default AboutSection4Data
