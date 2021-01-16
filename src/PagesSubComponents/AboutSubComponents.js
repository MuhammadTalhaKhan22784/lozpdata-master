import React from 'react'
import '../Pages/Styles/About.css'
import AboutProcessSection2 from './AboutProcessSection2'
import AboutProcessSection3 from './AboutProcessSection3'
const AboutSubComponents = () => {
    return (
        <>
            <div className="about-section">
                <div className="about-sec-1 container">
                    <h1 className="display-6">We start here</h1>
                </div>
                <AboutProcessSection2 />
                <AboutProcessSection3
                    isShow="false"
                    abtText1="01"
                    abtText2="Ip protection"
                    abtImage={<svg id="elvn-1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ overflow: 'hidden', left: '-.15625px', top: '.640625px', visibility: 'visible' }} className="enlivenem"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke:#e22f2c;stroke-miterlimit:10;stroke-width:1.5px}" }} /></defs><title>icons</title><path className="cls-1" d="M69,53.17a3.84,3.84,0,0,0-2.26,3.5V72a2.78,2.78,0,0,1-5.55,0V56.68A3.84,3.84,0,0,0,59,53.17a12.27,12.27,0,0,1-7.22-11.26A12.41,12.41,0,0,1,63.31,29.78l.69,0a12.25,12.25,0,0,1,5,23.41Z" /><path className="cls-1" d="M39.39,91.39H88.61a0,0,0,0,1,0,0v7.73A10.56,10.56,0,0,1,78,109.68H49.95A10.56,10.56,0,0,1,39.39,99.12V91.39a0,0,0,0,1,0,0Z" /><path className="cls-1" d="M49.95,109.68a10.47,10.47,0,0,1-3.08-.46A17.4,17.4,0,0,0,64,124h0a17.4,17.4,0,0,0,17.14-14.79,10.47,10.47,0,0,1-3.09.47Z" /><path className="cls-1" d="M39.37,91.39H88.63a27.87,27.87,0,0,1,7.12-17.45,42.21,42.21,0,1,0-63.28.23A27.45,27.45,0,0,1,39.37,91.39Z" /><desc>Created with Snap</desc></svg>}
                    abtPara="It’s our top priority. We start every project with an NDA, to make sure that your crucial information and Intellectual Property is always safe and secure."
                />
                <AboutProcessSection2 />
                <AboutProcessSection3
                    abtText1="02"
                    abtText2="Consultation & project discovery"
                    abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/process/icons_Consultation%20&%20Project%20Discovery.svg"
                    abtPara="It’s our top priority. We start every project with an NDA, to make sure that your crucial information and Intellectual Property is always safe and secure."
                />
                <AboutProcessSection2 />
                <AboutProcessSection3
                    abtText1="03"
                    abtText2="Rapid strategy workshop™"
                    abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/process/icons_Rapid%20Strategy%20Workshop.svg"
                    abtPara="Then, we will identify a best way to cook your idea ready for development, review commercial & technical risk and create a level of efforts (LOE) document for you to review."
                />
                <AboutProcessSection2 />
                <AboutProcessSection3
                    abtText1="04"
                    abtText2="User interfaces & experiences"
                    abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/process/icons_User%20Interfaces%20&%20Experiences.svg"
                    abtPara="Then, our team of talented UI/UX engineers ensures that whenever we build a particular screen, an experience, the transition, icon or any other element, it always looks and feels like it came from Cubix."
                />
                 <AboutProcessSection2 />
                <AboutProcessSection3
                    abtText1="05"
                    abtText2="Agile development"
                    abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/process/icons_Agile%20Development.svg"
                    abtPara="Our agile-based development runs in two-week sprints that result in a new, incremental build at the end of each fortnight, allowing you to regularly review and assess what we’re building."
                />
                 <AboutProcessSection2 />
                <AboutProcessSection3
                    abtText1="06"
                    abtText2="Testing & incremental quality assurance"
                    abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/process/icons_Testing%20&%20Incremental%20Quality%20Assurance.svg"
                    abtPara="To avoid future challenges we make sure that you are building great software from the very start. Our Incremental testing and quality assurance approach ensure that there are no surprises at the end."
                />
                 <AboutProcessSection2 />
                <AboutProcessSection3
                    abtText1="07"
                    abtText2="Support & maintenance"
                    abtImage="https://www.cubix.co/themes/responsiv-clean/assets/images/process/icons_Support%20&%20Maintenance.svg"
                    abtPara="After we’ve gone live, we offer maintenance packages that cover everything from the occasional checkup all the way up to ongoing feature expansions and whole new versions."
                />
            </div>
            
        </>
    )
}

export default AboutSubComponents
