import React from 'react'

const AboutSection3 = (props) => {
    return (
        <>
            <div className="about-sec-3 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="abt-sec-3-1">
                                <h1 className="fs-1">{props.abtText1}</h1>
                                <h1 className="fs-3 text-end">{props.abtText2}</h1>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="abt-sec-3-2 d-flex justify-content-center">
                               {props.isShow ? props.abtImage
                               : 
                               <img src={props.abtImage}/>
                               } 
                
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <p className="fs-5 lh-base">{props.abtPara}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection3
