import React from 'react'
import '../Pages/Styles/About.css'
const AboutSection2 = () => {
    return (
        <>
            <div className="abt-sec-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="abt-main-image mt-5">
                                <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/cubix-about.jpg" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="abt-main-text">
                                <div>
                                    <span className="fs-5">Work with the Tech Leader.</span>
                                </div>
                                <div>
                                    <h2 className="fs-2">Cubix brings ideas to life, leveraging modern technologies.</h2>
                                </div>
                                <div>
                                    <p className="fs-5">Cubix started its journey in 2008 with a team of seven. Today, it has grown into a full-cycle, mobile-first software development company, with the highest team satisfaction in the industry, independent analyst recognition, and an ever-growing list of delighted clients who work with us again and again. We are proud to have worked with Estee Lauder, Clinique, Engro, Swatch Group, Politico, and OOMCO. We have helped dozens of startups with modern technologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="abt-hr"/>
                </div>
            </div>
        </>
    )
}

export default AboutSection2
