import React from 'react'
import { Element, scroller } from "react-scroll"
// import Navbar from '../Layout/Navbar'
import Navbar from '../Layout/navbar/navbar'
import '../Pages/Styles/Services.css'
import ServicePageCards from '../PagesSubComponents/ServicePageCards'
import ServicesSwiperLeftCards from '../PagesSubComponents/ServicesSwiperLeftCards'
import ServicesSwiperRightCards from '../PagesSubComponents/ServicesSwiperRightCards'
import DevEnterprise from '../Components/DevEnterprise'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'
import BgServicesData from '../Components/Utills/BgServicesData'
const Services = () => {
    const scrollToElement = (el) => {
        scroller.scrollTo(el, {
            duration: 200,
            delay: 100,
            smooth: true
        })
    }
    return (
        <>
            <Navbar />

            <div className="bg-services">
                <BgServicesData
                bgText="World-class software solutions for business across the globe."
                bgPara="Design. Development. Consultancy."
                />
                <div onClick={() => scrollToElement("custom")} className="down-arrow">
                    <i className="fa fa-angle-down"></i>
                </div>
            </div>
            {/* <div style={{ minHeight: `100vh` }}>
                <span onClick={() => scrollToElement("custom")}>HELLO WORLD</span>
            </div> */}

            <Element name="custom">
                <div className="service-main">
                    <div className="service-main-text-1">
                        <h6>DISCOVERY . DESING . DEVELOPMENT . TESTING</h6>
                    </div>
                    <div className="service-main-text-2">
                        <h2>Digital demand thrives in our hands</h2>
                        <p>We bring to you award-winning products, excellent UI/UX, and a world-class tech talent of web and mobile arena that bridges the gap between the creative and technology world. AtLozpdata , our solutions become a technology brand that others take inspiration from.</p>
                    </div>
                    <div className="container">
                        <div className="row gy-5">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <ServicePageCards cardNum="23%"
                                    cardText="INCREASED RESPONSE TIME"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <ServicePageCards cardNum="23%"
                                    cardText="INCREASED RESPONSE TIME"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <ServicePageCards cardNum="23%"
                                    cardText="INCREASED RESPONSE TIME"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <ServicePageCards cardNum="23%"
                                    cardText="INCREASED RESPONSE TIME"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
            <ServicesSwiperRightCards/>
            <ServicesSwiperLeftCards/>
            <ServicesSwiperRightCards/>
            <ServicesSwiperLeftCards/>
            <DevEnterprise/>
            <ProductExperienceSection/>
            <Footer/>
        </>
    )
}

export default Services
