import React from "react"
// import CaseStudy from "../Pages/CaseStudy"
import {useHistory} from "react-router-dom"

let WorkSection2 = (props) => {
    let history = useHistory()
    return(
            <div style={{backgroundImage : `url(${props.backgorundimage})` }} className="WorkSection2">
                <div className={`${props.condition === "true" ? "WorkSection2-Child-div" : "WorkSection2-Child"} `}>
                    <div>
                        <h1>{props.heading}</h1>
                        <p>{props.para}</p>
                        <button onClick={() => history.push("/work/CaseStudy")} className="Worksection2Button">view casestudy</button>
                    </div>
                    <img src={props.image} alt="" />
                </div>
            </div>
    )
}

export default WorkSection2