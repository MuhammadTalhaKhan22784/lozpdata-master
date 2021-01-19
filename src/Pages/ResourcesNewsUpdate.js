import React from 'react'
import WorkSectionData1 from '../Components/Utills/WorkSectionData1'
import Navbar from '../Layout/navbar/navbar'
import ResourcesNewsUpdateSec2 from '../PagesSubComponents/ResourcesNewsUpdateSec2'
import ResourcesNewsUpdateSec3 from '../PagesSubComponents/ResourcesNewsUpdateSec3'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'


const ResourcesNewsUpdate = () => {
    return (
        <>
            <Navbar isShow="false"/>
            <WorkSectionData1
                bgText="News and announcements"
                bgPara1="Explore latest updates and announcements about new ventures, partnerships,"
                bgPara2="awards, recognition, and more. Watch this space for trending news about Cubix!"
            />
            
            <ResourcesNewsUpdateSec2 isShow="false"/>
            <ResourcesNewsUpdateSec3/>
            <ProductExperienceSection/> 
            <Footer/>
        </>
    )
}

export default ResourcesNewsUpdate
