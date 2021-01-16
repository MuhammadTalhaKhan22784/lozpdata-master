import React from 'react'
import AboutSection3Data from '../Components/Utills/AboutSection3Data'
import '../Pages/Styles/About.css'

const AboutSection3 = () => {
    return (
        <>
            <div className="abt-sec-3">
                <div className="container">
                    <div className="row gx-0 gy-4">
                        <AboutSection3Data />
                        <AboutSection3Data />
                        <AboutSection3Data />
                        <AboutSection3Data />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection3
