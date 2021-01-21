import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Fade from 'react-reveal/Fade';

const ServicesSwiperLeftCards = ({ content }) => {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <>
            <div className="services-swiper-Section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">

                            <Swiper
                                navigation={{
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
                                }}
                            >

                                <SwiperSlide className="slide">
                                    <div className="position-relative w-100" style={{ height: `80vh` }}>
                                        <div className="s-swipe-3 s-image">
                                        </div>
                                        <div className="position-relative">
                                            HHELfjkjaswwaj
                                    </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide className="slide" >
                                    <div className="position-relative w-100" style={{ height: `80vh` }}>
                                        <div className="s-swipe-3-1 s-image">
                                        </div>
                                        <div className="position-relative">
                                            HHELfjkjaswwaj
                                        </div>
                                    </div>

                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <Fade bottom duration={2100} delay={120}>
                            <div className="s-swipe-1 col-lg-6 ">
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
                                    <ul className="s-swipe-ul">
                                        <li>Rapid Strategy Workshop™</li>
                                        <li>Define project value proposition</li>
                                        <li>Identify development and deployment requirements + constraints.</li>
                                        <li>Perform market research - comparative applications/products.</li>
                                        <li>Identify key opportunities for the feature set.</li>
                                        <li>Growth Hacking</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSwiperLeftCards
