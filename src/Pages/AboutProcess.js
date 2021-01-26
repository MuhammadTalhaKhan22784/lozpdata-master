import React from 'react'
import WebComponentData from '../Components/Utills/WebComponentData'
import Navbar from '../Layout/navbar/navbar'
import AboutSubComponents from '../PagesSubComponents/AboutSubComponents'
import '../Pages/Styles/About.css'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'


const AboutProcess = () => {
    
    return (
        <>
            <Navbar />
            <div className="abt-process">
                <WebComponentData isShow
                    isBg
                    imgIcon=""
                    bgText="Process"
                    bgPara="At Cubix, we deliver successful products by doing three
                things: being accountable for our projects, making our
                methods transparent, and building strong relationships with
                our clients."
                />
            </div>

            <AboutSubComponents />
            <ProductExperienceSection />
            <Footer />
        </>
    )
}

export default AboutProcess
