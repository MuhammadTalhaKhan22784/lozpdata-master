import React from 'react'

const MVPDevelopmentSection1 = (props) => {
    return (
        <>
            <h1 className="fs-4 lh-base text-center sd-heading">
               {props.mvdText1} <br /> {props.mvdText2}</h1>

            <h5 className="fs-5 lh-base text-center s1-para">
                {props.mvdPara1} <br /> <br />
                    {props.mvdPara2}</h5>
        </>
    )
}

export default MVPDevelopmentSection1
