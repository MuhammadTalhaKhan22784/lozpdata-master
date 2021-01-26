import React from 'react'
import AboutSection4Data from '../Components/Utills/AboutSection4Data'
import '../Pages/Styles/About.css'

const AboutSection4 = () => {
    return ( 
        <>
            <div className="abt-sec-4">
                <div className="container">
                    <div className="row gx-4 gy-5">
                            <AboutSection4Data 
                            abtText="Startup partner program™"
                            abtPara="We have created Startup Partner Program™ for funding early stage startups. We make small investments in return for small stakes in the startups we build."
                            />
                            <AboutSection4Data 
                            abtText="Rapid strategy workshop™"
                            abtPara="Building a successful product is an art. The dozens of clients have used our Rapid Strategy Workshop™ model to get multi-million dollar revenue and valuations."
                            />
                            <AboutSection4Data 
                            abtText="Rapid mvp development™"
                            abtPara="Do you want to test the idea with minimum investment and time? – Build Minimum Viable Product through our Rapid MVP Development™."
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection4
