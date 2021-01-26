import React from 'react'
import AboutSection9Data from '../Components/Utills/AboutSection9Data'
import '../Pages/Styles/About.css'


const AboutSection9 = () => {
    return (
        <>
            <div className="abt-sec-9">
                <div className="abt-sec-9-main">
                    <h1 className="fs-1 mb-3">Headquartered in west palm beach, florida</h1>
                    <p className="fs-5">Cubix has maintained an unbroken record of successful custom software architecture and development since 2008, across startups, enterprises, and Fortune 500 Companies, including PayPal, Tissot, Estee Lauder, Politico, Walmart, Sapient, and Canon.</p>
                </div>

                <div className="abt-sec-9-imgs mt-5">
                    <div className="container overflow-hidden">
                        <div className="row justify-content-center gx-5">
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/bigfish-logo.png"/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/politico.png"/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/tissot-logo-1.png"/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/walmart.png"/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/walmart.png"/>
                       
                        </div>
                        <div className="row justify-content-center gx-5">
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/sapient-logo-1.png"/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/dreamworks-logo.png"/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/datastream.png "/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/artizone-logo.png"/>
                            <AboutSection9Data abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/about/artizone-logo.png"/>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection9
