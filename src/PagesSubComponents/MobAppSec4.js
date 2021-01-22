import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import MobAppSec4Data from '../Components/Utills/MobAppSec4Data';

const MobAppSec4 = () => {
    return (
        <>

            <div className="section4">

                <div>
                    <h1 className="awards fs-1 fw-bold lh-base">Awards & Recognitions</h1>
                </div>
                <Swiper navigation={true} grabCursor={true} className="awards-slider">
                    <SwiperSlide>
                        <div className="sec4cards">
                        <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp"
                            sText="Forbes technology council"
                            sPara="Recognised member of forbes technology council"

                            />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp"
                            sText="Top hybrid app developers june 2020"
                            sPara="Top hybrid app development company"
                            isDown />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp"
                            sText="Forbes technology council"
                            sPara="Recognised member of forbes technology council"

                            />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp"
                            sText="Top hybrid app developers june 2020"
                            sPara="Top hybrid app development company"
                            isDown />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sec4cards">
                        <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp"
                            sText="Forbes technology council"
                            sPara="Recognised member of forbes technology council"

                            />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp"
                            sText="Top hybrid app developers june 2020"
                            sPara="Top hybrid app development company"
                            isDown />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp"
                            sText="Forbes technology council"
                            sPara="Recognised member of forbes technology council"

                            />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp"
                            sText="Top hybrid app developers june 2020"
                            sPara="Top hybrid app development company"
                            isDown />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sec4cards">
                        <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp"
                            sText="Forbes technology council"
                            sPara="Recognised member of forbes technology council"

                            />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp"
                            sText="Top hybrid app developers june 2020"
                            sPara="Top hybrid app development company"
                            isDown />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/forbes-technologies-cource1.webp"
                            sText="Forbes technology council"
                            sPara="Recognised member of forbes technology council"

                            />
                            <MobAppSec4Data 
                            sImg="https://www.cubix.co/themes/responsiv-clean/assets/images/home/webp/2020%20-Hybrid%20App%20Developers1.webp"
                            sText="Top hybrid app developers june 2020"
                            sPara="Top hybrid app development company"
                            isDown />
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="awardandarrows">
                    <h3>see all our awards</h3>

                    {/* <div>
        <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="phototectimage" />
        <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="phototectimage" />
    </div> */}
                </div>
            </div>



        </>
    )
}

export default MobAppSec4
