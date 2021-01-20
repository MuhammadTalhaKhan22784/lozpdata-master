import React from "react"
import "./Styles/CaseStudy.css"
import Navbar from '../Layout/navbar/navbar'
import CaseStudySection1 from "../PagesSubComponents/CaseStudySection1"
import CaseStudySection2 from "../PagesSubComponents/CaseStudySection2"
import CaseStudySection3 from "../PagesSubComponents/CaseStudySection3"
import CaseStudySection4 from "../PagesSubComponents/CaseStudySection4"
import CaseStudySection5 from "../PagesSubComponents/CaseStudySection5"
import CaseStudySection6 from "../PagesSubComponents/CaseStudySection6"
import CaseStudySection7 from "../PagesSubComponents/CaseStudySection7"
import ProductExperienceSection from "../Components/ProductExperienceSection"
import Footer from "../Layout/Footer"

let CaseStudy = (props) => {
    return(
        <>
        <div className="CaseStudy">
             <Navbar/>
             <CaseStudySection1 />
             <CaseStudySection2 />
             <CaseStudySection3 />
             <CaseStudySection4 />
             <CaseStudySection5 />
             <CaseStudySection6 />
             <CaseStudySection7 />
        </div>
        <ProductExperienceSection/>
        <Footer/>
        </>
    )
}

export default CaseStudy 