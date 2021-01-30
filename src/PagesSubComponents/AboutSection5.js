import React from 'react'
import "../Pages/Styles/About.css"
const AboutSection5 = () => {
    return (
        <>
            <div className="abt-sec-5">
                <div className="abt-sec-5-text">
                    <h1 className="display-6">Our creative heads build beautiful digital products.</h1>
                    <p className="fs-5">Software and mobile app development for businesses from across the globe.</p>
                </div>
                <div className="abt-sec-5-main">
                    <div className="container">
                        <div className="row mx-auto gy-5">
                            <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                                <div className="abt-5-img-1">
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/cubix-family-768x538.jpg" />
                                </div>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="abt-5-img-2">
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/about-cubix-side.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="row abt-cont-2">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="abt-sec-5-content-1">
                                    <p className="fs-5 let-spacing">
                                        We are proud to have the best team of creative thinkers and fantastic clients from across the world, trusting our developing, designing, and branding.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <div className="abt-sec-5-content-1">
                                    <p className="fs-5 lh-base">
                                        <strong className="fw-bolder fs-3">Our approach</strong>
                                        <br />
                                        To be the number one choice for businesses when it comes to digital product development, design, quality, and innovation.
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <div className="abt-sec-5-content-1">
                                    <p className="fs-5 lh-base">
                                        <strong className="fw-bolder fs-3">Our mission</strong>
                                        <br />
                                        To help businesses become competitive with the power of digital innovation, outstanding design, and emerging technologies via building intelligent digital products.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection5
