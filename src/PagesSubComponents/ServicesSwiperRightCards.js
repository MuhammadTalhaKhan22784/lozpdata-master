import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import '../Pages/Styles/Services.css'
import Fade from 'react-reveal/Fade';


const ServicesSwiperRightCards = ({ content }) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <>
            <div className="services-swiper-Section">
                <div className="container-fluid">
                    <div className="row">
                        <Fade bottom duration={2100} delay={120}>
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
                                {/* <div ref={navigationPrevRef} >PREVIOUS</div>
                                <div ref={navigationNextRef} >NEXT</div> */}
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
                        </Fade>
                        <div className="col-lg-6">

                            <Swiper navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }} grabCursor={true} onSwiper={(swiper) => {
                                // Delay execution for the refs to be defined
                                setTimeout(() => {
                                    // Override prevEl & nextEl now that refs are defined
                                    swiper.params.navigation.prevEl = navigationPrevRef.current
                                    swiper.params.navigation.nextEl = navigationNextRef.current

                                    // Re-init navigation
                                    swiper.navigation.destroy()
                                    swiper.navigation.init()
                                    swiper.navigation.update()
                                })
                            }}> 

                                <SwiperSlide className="slide">
                                    <div className="position-relative w-100" style={{ height: `80vh` }}>
                                        <div className="s-swipe-2 s-image">

                                        </div>
                                        <div className="s-text">
                                            <button>Website</button>
                                            <h3 className="fs-4 mt-3">Today today</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide">
                                    <div className="position-relative w-100" style={{ height: `80vh` }}>
                                        <div className="s-swipe-2-1 s-image">

                                        </div>
                                        <div className="position-relative">
                                            {/* HHELfjkjaswwaj */}
                                        </div>
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
