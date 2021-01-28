import React from 'react'
import '../Pages/Styles/About.css'
import abtImg3 from '../AboutImages/abtImg3.jpg'

const AboutSection7 = () => {
    return (
        <>
            <div className="abt-sec-7">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="abt-sec-7-img">
                                <img className="img-thumbnail" src={abtImg3} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="abt-sec-7-content">
                                <h2 className="mt-2 fs-4 fw-bold">TESTINOMIALS</h2>
                                <h5 className="mt-3 fs-3 fw-bold">What Client Says</h5>
                                <div className="mt-4 quotes-cicle">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <p className="mt-3 fs-6 lh-base">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                <h6 className="mt-3 fs-5 fw-bold">Muhammad Rashid</h6>
                                <span className="mt-3">designier</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection7
