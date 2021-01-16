import React from 'react'
import WebComponentData from '../Components/Utills/WebComponentData'
import Navbar from '../Layout/navbar/navbar'
import AboutSubComponents from '../PagesSubComponents/AboutSubComponents'
import '../Pages/Styles/About.css'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'
import AboutSection2 from '../PagesSubComponents/AboutSection2'
import AboutSection3 from '../PagesSubComponents/AboutSection3'
import AboutSection4 from '../PagesSubComponents/AboutSection4'
import AboutSection5 from '../PagesSubComponents/AboutSection5'
import ResourcesNewsUpdateSec2 from '../PagesSubComponents/ResourcesNewsUpdateSec2'
import AboutSection7 from '../PagesSubComponents/AboutSection7'
import AboutSection8 from '../PagesSubComponents/AboutSection8'
const About = () => {
    return (
        <>
            <Navbar />
            <WebComponentData isShow
                imgIcon=""
                bgText="About"
                bgPara="At Cubix, We Deliver Successful Products By Doing Three Things: Being Accountable For Our Projects, Making Our Methods Transparent, And Building Strong Relationships With Our Clients."
            />
            <AboutSection2 />
            <AboutSection3 />
            <AboutSection4 />
            <AboutSection5 />
            <ResourcesNewsUpdateSec2 />
            <AboutSection7/>
            <AboutSection8/>
        </>
    )
}

export default About
