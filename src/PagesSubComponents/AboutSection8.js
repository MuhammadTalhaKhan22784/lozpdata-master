import React from 'react'
import '../Pages/Styles/About.css'


const AboutSection8 = () => {
    return (
        <>
            <div className="abt-sec-8">
                <div className="abt-sec-8-text">
                    <h1 className="display-6 fw-bolder">Some of our tech experts</h1>
                    <p className="fs-5">Talent wins games, but teamwork and intelligence win championships.</p>
                </div>
                <div className="abt-sec-8-tabs">

                    <ul className="abt-nav nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="pills-leaders-tab" data-bs-toggle="pill" href="#pills-leaders" role="tab" aria-controls="pills-leaders" aria-selected="true">leaders</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-Advisors-tab" data-bs-toggle="pill" href="#pills-Advisors" role="tab" aria-controls="pills-Advisors" aria-selected="false">Advisors</a>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="leaders-tab-pane tab-pane fade show active" id="pills-leaders" role="tabpanel" aria-labelledby="pills-leaders-tab">
                             <div className="abt-wrapper">
                                <div className="abt-tab-card card">
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/about/Austin-Lovvorn.jpg" />
                                    <div className="info">
                                        <h1>Austin lovvorn</h1>
                                        <p>Avp - north america</p>
                                    </div>
                                </div>

                            </div>
                            
                           
                        </div>
                        <div className="tab-pane fade" id="pills-Advisors" role="tabpanel" aria-labelledby="pills-Advisors-tab">dadsd</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutSection8
