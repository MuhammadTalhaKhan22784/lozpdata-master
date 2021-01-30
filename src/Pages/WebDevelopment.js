import React, { useLayoutEffect } from 'react'
import '../Pages/Styles/WebDevelopment.css'
// import Navbar from '../Layout/Navbar'
import Navbar from '../Layout/navbar/navbar'
import WebDevelopmentSection1 from '../PagesSubComponents/WebDevelopmentSection1'
import WebDevelopmentSection2 from '../PagesSubComponents/WebDevelopmentSection2'
import WebDevelopmentSection3 from '../PagesSubComponents/WebDevelopmentSection3'
import WebDevevelopmentSection4 from '../PagesSubComponents/WebDevevelopmentSection4'
import WebDevelopmentSection6 from '../PagesSubComponents/WebDevelopmentSection6'
import WebDevelopmentSection7 from '../PagesSubComponents/WebDevelopmentSection7'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'
import WebComponentData from '../Components/Utills/WebComponentData'


const WebDevelopment = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <WebComponentData
                imgIcon="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development-icon.svg"
                bgText="Website development"
                bgPara="Websites that help disrupt industries and set new benchmarks"
            />
            <WebDevelopmentSection1 />
            <WebDevelopmentSection3 />
            <WebDevelopmentSection2 />
            <WebDevevelopmentSection4 />
            <WebDevelopmentSection6
                webText1="Software as a service"
                webText2="We provide Software-as-a-Service to clients’ to help them put resources to more efficient use and make informed business decisions. Our SaaS products help companies grow exponentially and penetrate untapped markets through better strategic planning and trend forecasts."
                webText3="Cubix’s Software-as-a-Service solutions are used by Fortune 500 companies, allowing them to take advantage of the latest technology and boost business multiple-fold."
                webImg="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/software-as-a-service-1.jpg"
            />
            <WebDevelopmentSection6
                webText1="Software as a service"
                webText2="We provide Software-as-a-Service to clients’ to help them put resources to more efficient use and make informed business decisions. Our SaaS products help companies grow exponentially and penetrate untapped markets through better strategic planning and trend forecasts."
                webText3="Cubix’s Software-as-a-Service solutions are used by Fortune 500 companies, allowing them to take advantage of the latest technology and boost business multiple-fold."
                webImg="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/software-as-a-service-1.jpg"
                isReplace="false" />
            <WebDevelopmentSection6
                webText1="Software as a service"
                webText2="We provide Software-as-a-Service to clients’ to help them put resources to more efficient use and make informed business decisions. Our SaaS products help companies grow exponentially and penetrate untapped markets through better strategic planning and trend forecasts."
                webText3="Cubix’s Software-as-a-Service solutions are used by Fortune 500 companies, allowing them to take advantage of the latest technology and boost business multiple-fold."
                webImg="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/software-as-a-service-1.jpg"
            />
            <WebDevelopmentSection7 />
            <ProductExperienceSection />
            <Footer />
        </>
    )
}

export default WebDevelopment
