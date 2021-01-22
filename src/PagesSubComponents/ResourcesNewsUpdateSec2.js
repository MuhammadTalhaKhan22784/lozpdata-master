import React from 'react'
import ResourcesNewsSec2Data from '../Components/Utills/ResourcesNewsSec2Data'
import '../Pages/Styles/Resources.css'
import { Element, scroller } from "react-scroll"


const ResourcesNewsUpdateSec2 = (props) => {
    return (
        <>

            <div className="res-news-sec-2">
                <Element name="custom">
                    <div
                        style={{ display: props.isShow ? `none` : `block` }}
                        className="res-news-2-main">
                        <h2 className="fs-1">Media mentions</h2>
                        <p className="fs-5">We stay in the news for our incredible tech achievements.</p>
                    </div>
                </Element>
                <div className="container">
                    <div className="row gy-5">
                        <ResourcesNewsSec2Data
                            resImg="https://www.cubix.co/storage/app/media/about/yahoo-logo.svg"
                            resPara="Yahoo There's finally a dating app for people with disabilities"
                        />
                        <ResourcesNewsSec2Data
                            resImg="https://www.cubix.co/storage/app/media/about/BuzzFeed-logo.svg"
                            resPara="Yahoo There's finally a dating app for people with disabilities"
                        />
                        <ResourcesNewsSec2Data
                            resImg="https://www.cubix.co/storage/app/media/about/yahoo-logo.svg"
                            resPara="Yahoo There's finally a dating app for people with disabilities"
                        />



                    </div>
                </div>
            </div>
        </>
    )
}
{/* <div className="res-news-card">
                                <div className="res-news-card-content">
                                    <img src="https://www.cubix.co/storage/app/media/about/yahoo-logo.svg" />
                                    <p className="fs-6">
                                        Yahoo There's finally a dating app for people with disabilities
                                </p>
                                </div>
                            </div> */}


export default ResourcesNewsUpdateSec2
