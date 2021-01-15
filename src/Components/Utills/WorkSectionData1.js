import React from 'react'

const WorkSectionData1 = (props) => {
    return (
        <>
            <div className="worksection1">
                <h1>{props.bgText}</h1>
                <p>{props.bgPara1}</p>
                <p>{props.bgPara2}</p>
                <div>
                    <i className="fa fa-angle-down "></i>
                </div>
            </div> 
        </>
    )
}

export default WorkSectionData1
