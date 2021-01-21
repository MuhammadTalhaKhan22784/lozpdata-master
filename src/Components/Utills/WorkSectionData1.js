import React from 'react'
import { Element, scroller } from "react-scroll"

const WorkSectionData1 = (props) => {
    const scrollToElement = (el) => {
        scroller.scrollTo(el, {
            duration: 200,
            delay: 100,
            smooth: true
        })
    }
    return (
        <>
            <div className="worksection1">
                <h1 className="fs-1">{props.bgText}</h1>
                <p>{props.bgPara1}</p>
                <p>{props.bgPara2}</p>
                <div onClick={() => scrollToElement("custom")}>
                    <i className="fa fa-angle-down "></i>
                </div>

            </div>
        </>
    )
}

export default WorkSectionData1
