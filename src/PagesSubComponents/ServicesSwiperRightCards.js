import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import '../Pages/Styles/Services.css'
const ServicesSwiperRightCards = () => {
    return (
        <>
            <div className="services-swiper-Section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="s-swipe-1 ps-5 col-lg-6 ">
                            <div className="s-swipe-num">
                                <h6>01</h6>
                            </div>
                            <div className="s-swipe-h">
                                <h2>Ideation and evaluation</h2>
                            </div>
                            <div className="s-swipe-p">
                                <p>Enterprises are fast adopting technology to improve their productivity, bring efficiency, and remove barriers preventing free and timely flow of information within the enterprise.</p>
                            </div>
                            <div className="s-swipe-list">
                                <div className="s-swipe-ul d-flex flex-column">
                                    <span>Rapid Strategy Workshop™</span>
                                    <span>Define project value proposition</span>
                                    <span>Identify development and deployment requirements + constraints.</span>
                                    <span>Perform market research - comparative appspancations/products.</span>
                                    <span>Identify key opportunities for the feature set.</span>
                                    <span>Growth Hacking</span>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-6">

                            <Swiper navigation={true} grabCursor={true}>

                                <SwiperSlide>
                                    <div className="s-swipe-2">
                                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/services-page/services-page-one.jpg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="s-swipe-2">
                                        <img src="https://www.cubix.co/themes/responsiv-clean/assets/images/services-page/services-portfolio-2-new.jpg" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSwiperRightCards
