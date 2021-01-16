import React from 'react'
import AboutSection4Data from '../Components/Utills/AboutSection4Data'
import '../Pages/Styles/About.css'


const AboutSection4 = () => {
    return (
        <>
            <div className="abt-sec-4">
                <div className="container">
                    <div className="row gx-4  gy-5">
                        <AboutSection4Data />
                        <AboutSection4Data />
                        <AboutSection4Data />
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection4
