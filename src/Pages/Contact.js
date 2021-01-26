import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Pages/Styles/Contact.css'
import ContactForm from '../Components/Utills/ContactForm';
import logoImg1 from '../Images/logo-12.svg'
import { Link } from 'react-router-dom';



const Contact = () => {
    const locations = ["Headquarter", "Karachi", "Dubai"];
    return (
        <>
            <div className="contact-content">
                <div className="contact-left-content">
                    <div className='logo_div'>
                        <Link to="/"> <img className='logo' src={logoImg1} alt="" /></Link>
                    </div>
                    <div className="sub-contact-2">
                        <Swiper className="py-5" loop={true} navigation={true} grabCursor={true}>
                            <SwiperSlide>
                                <div className="sub-contact-2-item-1">
                                    <h2>Dubai</h2>
                                    <p>Building 11, Level 7,</p>
                                    <p>Bay Square, Business Bay, UAE</p>
                                    <span>VIEW LOCATION</span>
                                </div>
                                <div className="sub-contact-2-item-2">
                                    <img className="sub-cont-img-1" src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/birds.svg" />
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/dubai-landscape.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sub-contact-2-item-1">
                                    <h2>Dubai</h2>
                                    <p>Building 11, Level 7,</p>
                                    <p>Bay Square, Business Bay, UAE</p>
                                    <span>VIEW LOCATION</span>
                                </div>
                                <div className="sub-contact-2-item-2">
                                    <img className="sub-cont-img-1" src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/birds.svg" />
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/dubai-landscape.svg" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sub-contact-2-item-1">
                                    <h2>Dubai</h2>
                                    <p>Building 11, Level 7,</p>
                                    <p>Bay Square, Business Bay, UAE</p>
                                    <span>VIEW LOCATION</span>
                                </div>
                                <div className="sub-contact-2-item-2">
                                    <img className="sub-cont-img-1" src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/birds.svg" />
                                    <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/contact/dubai-landscape.svg" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="contact-right-content">
                    <div className="contact-right-top">
                        <div className="con-top-1">
                            <i className="fas fa-envelope"></i>
                            <span>Info@lozpdata.com</span>
                        </div>
                        <div className="con-top-2">
                            <i className="fas fa-phone-alt"></i>
                            <span>+923028072696</span>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>

        </>
    )
}

export default Contact
