import React, { useLayoutEffect } from 'react'
import BgServicesData from '../Components/Utills/BgServicesData'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/navbar/navbar'
import '../Pages/Styles/About.css'
import AboutClientSection2 from '../PagesSubComponents/AboutClientSection2'
import ProductExperienceSection from '../Components/ProductExperienceSection'


const AboutClient = () => {
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    });
    return (
        <>
           <Navbar/>
           <div className="bg-client">
           <BgServicesData
            isShow="false"
            bgText="We help startups, enterprises, and fortune 500 companies"
            bgPara="We have helped 600+ companies transform with world-class software solutions."
            />
            </div>
           <AboutClientSection2/>
           <ProductExperienceSection/>  
           <Footer/>
        </>
    )
}

export default AboutClient
