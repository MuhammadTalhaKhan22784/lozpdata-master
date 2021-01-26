import React from 'react'
import FooterData from '../Components/Utills/FooterData'
import FooterData2 from '../Components/Utills/FooterData2'

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                <div className="footer container">
                    <FooterData
                        isShow="false"
                        countryImage="https://www.cubix.co/storage/app/media/home/usa-flag-icon.svg"
                        countryName="United states"
                        countryText="Son Jose , California"
                    />

                    <FooterData
                        countryImage="https://www.cubix.co/storage/app/media/home/pakistan-flag-icon.svg"
                        countryName="Pakistan"
                        countryText=" johar town J3 block, building number 149, Lahore"
                    />

                    <FooterData2 ftName="Services"
                        isShow
                        ftText1="Mobile Application"
                        ftText2="Web Development"
                        ftText3="MVP Development"
                        ftText4="Artificial Intelligence" />
                    <FooterData2 ftName="Info"
                        ftText1="abc123@gmail.com"
                        ftText2="+923104267558"
                        ftText3="&nbsp;"
                        ftText4="&nbsp;"

                    />
                </div>
            </div>
            {/* <div className="ft-hr">
                <hr />
            </div> */}
            <div className="ft-btm">
                <div className="footer-bottom container">
                    <div>
                        <span>© 2020Lozpdata . All Rights Reserved. <strong>Terms of Use. Privacy Policy.</strong></span>
                    </div>
                    <div className="ft-icons">
                        <a target="blank" href="https://web.facebook.com/LozpDataSolutions"><i className="fab fa-facebook-f" ></i></a>
                        <a target="blank" href="https://www.linkedin.com/company/lozpdatasolutions"><i className="fab fa-linkedin-in"></i></a>
                        <a target="blank" href="https://twitter.com/lozpdata"><i className="fab fa-twitter"></i></a>
                        <i className="fab fa-dribbble mt-1"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
