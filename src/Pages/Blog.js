import React from 'react'
import Navbar from '../Layout/navbar/navbar'
import WorkSectionData1 from '../Components/Utills/WorkSectionData1'
import './Styles/Resources.css'
import BlogCardData from '../Components/Utills/BlogCardData'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer' 
const Blog = () => {
    return (
        <>
            <Navbar mode={true}/>
            <WorkSectionData1
                bgText="We help businesses"
                bgPara1="Empower people through technology and innovative solutions"
            // bgpara2="and innovative software solutions ."
            />
            <div className="blog">
                <div className="container mx-auto">
                    <div className="row mx-auto gy-5">
                        <BlogCardData/>
                        <BlogCardData/>
                        <BlogCardData/>
                    </div>
                    <div className="row mx-auto mt-5 gy-5">
                        <BlogCardData/>
                        <BlogCardData/>
                        <BlogCardData/>
                    </div>
                </div>

            </div> 
            <ProductExperienceSection/>
            <Footer/>
        </>
    )
}

export default Blog
