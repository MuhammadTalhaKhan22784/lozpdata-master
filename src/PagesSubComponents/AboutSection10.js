import React from 'react'
import AboutSection10Data from '../Components/Utills/AboutSection10Data'
import '../Pages/Styles/About.css'

const AboutSection10 = () => {
    return ( 
        <>
            <div className="abt-sec-10">
                <div className="abt-sec-9-main">
                    <h1 className="fs-1 mb-3">Live from our office</h1>
                    <p className="fs-5">Talent wins games, but teamwork and intelligence wins championships</p>
                </div>
                <div className="abt-9-video-card">
                    <div className="container">
                        <div className="row gy-4">
                            <AboutSection10Data />
                            <AboutSection10Data />
                            <AboutSection10Data />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection10
