import React from 'react'
import '../Pages/Styles/WebDevelopment.css'
import Fade from 'react-reveal/Fade';

const WebDevelopmentSection6 = (props) => {
    return (
        <>
            <div className="web-dev-sec-6" >
                <div style={{ flexDirection: props.isReplace ? 'row-reverse' : 'flex' }}
                    className="web-card-main ">
                    <Fade bottom duration={2000} delay={200}>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="web-card-text">
                                <h2 >{props.webText1}</h2>
                                <h5 className="lh-base text-center">{props.webText2}</h5>
                                <h5 className="lh-base text-center">{props.webText3}</h5>
                            </div>
                        </div>
                    </Fade>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <img className="img-fluid" src={props.webImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebDevelopmentSection6
