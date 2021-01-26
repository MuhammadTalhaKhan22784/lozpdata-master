import React, { useLayoutEffect } from 'react'
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
import AboutSection9 from '../PagesSubComponents/AboutSection9'
import AboutSection10 from '../PagesSubComponents/AboutSection10'
import DevEnterprise from '../Components/DevEnterprise'

const About = () => {
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    });
    return (
        <>
            <Navbar />
            <WebComponentData isShow
                imgIcon=""
                bgText="About"
                bgPara="Lozpdata is a software and mobile app development company
                with a world-class team of talented data scientists,
                developers, designers, mathematicians, engineers, and
                creative artists. We are motivated to build elegant and
                functional digital products that solve complex problems."
            />
            <AboutSection2 />
            <AboutSection3 />
            <AboutSection4 />
            <AboutSection5 />
            <ResourcesNewsUpdateSec2 />
            <AboutSection7 />
            <AboutSection8 />
            <AboutSection9 />
            {/* <AboutSection10 /> */}
            <DevEnterprise />
            <ProductExperienceSection />
            <Footer />
        </>
    )
}

export default About
