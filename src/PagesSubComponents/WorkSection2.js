import React from "react"
// import CaseStudy from "../Pages/CaseStudy"
import { useHistory } from "react-router-dom"
import Fade from 'react-reveal/Fade';
import { Element, scroller } from "react-scroll"

let WorkSection2 = (props) => {
    let history = useHistory()
    return (

        <div style={{ backgroundImage: `url(${props.backgorundimage})` }} className="WorkSection2">
            <div className={`${props.condition === "true" ? "WorkSection2-Child-div" : "WorkSection2-Child"} `}>
                <div>
                    <Element name="custom">
                        <h1>{props.heading}</h1>
                        <Fade bottom duration={2000} delay={200}>
                            <p>{props.para}</p>
                        </Fade>
                        <Fade bottom duration={2000} delay={500}>
                            <button onClick={() => history.push("/work/CaseStudy")} className="Worksection2Button">view casestudy</button>
                        </Fade>
                    </Element>
                </div>
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}

export default WorkSection2