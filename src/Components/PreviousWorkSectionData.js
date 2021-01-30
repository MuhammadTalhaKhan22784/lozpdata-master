import React from 'react'
import Fade from 'react-reveal/Fade';

const PreviousWorkSectionData = (props) => {
    return (
        <>
            <div style={{
                display: props.isData ? 'none' : 'block'

            }} className="prev-work-section-heading">
                <h2>We love transforming product ideas to digital realities.</h2>
            </div>

            <div style={{ marginTop: props.isData ? '7rem' : '0px' }} className="prev-work-items ">
                <div className="row">
                    <div className="col-lg-6 prev-work-item-1 ">
                        <img
                            style={{ top: props.isData ? "50px" : "30px" }}
                            className="prev-img-0" src={props.prevImg1} />
                        <img className="prev-img-1" src={props.prevImg2} />
                        <img style={{
                            display: props.isData ? 'none' : 'block'

                        }} className="prev-img-2" src={props.prevImg4} />
                    </div>
                    <div className="col-lg-6 prev-work-item-2 ">
                        <Fade left duration={1300} delay={300}>
                            <div>
                                <img src={props.prevImg3} />
                            </div>
                        </Fade>
                        <Fade left duration={1300} delay={300}>

                            <span>{props.prevText}</span>
                            <h3>{props.prevHeading}</h3>
                            <p>{props.prevParagraph}</p>
                            <div><button className="view-case-btn">VIEW CASE STUDY</button></div>
                        </Fade>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PreviousWorkSectionData
