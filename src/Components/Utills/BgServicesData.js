import React from 'react'
import Fade from 'react-reveal/Fade';

const BgServicesData = (props) => {
    return (
        <>
            <div className="bg-service-Text">
                <Fade bottom duration={1400} delay={200}>
                    <h1 className="display-5">{props.bgText}</h1>
                </Fade>
                <Fade bottom duration={1500} delay={400}>
                    <p>{props.bgPara}</p>
                </Fade>
            </div>
        </>
    )
}

export default BgServicesData
