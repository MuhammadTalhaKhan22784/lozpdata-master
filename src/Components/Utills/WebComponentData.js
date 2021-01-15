import React from 'react'

const WebComponentData = (props) => {
    return (
        <>
            <div style={{
                backgroundImage: props.isBgReplace ?
                    `url(https://www.cubix.co/themes/responsiv-clean/assets/images/artificial-intelligence/artificial-intelligence-machine-learning.jpg)`
                    : `url(https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development.jpg)`
            },
            {backgroundImage:props.isShow ? `url(https://www.cubix.co/themes/responsiv-clean/assets/images/process/cubix-process.jpg)`
         : `url(https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development.jpg)`}} className="bg-web-development">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-12"> */}
                <div className="bg-web-dev-content ms-4 ">
                    <div style={{
                        display: props.isShow ? `none` : `block`
                    }} className="bg-web-icon">
                        <img src={props.imgIcon} />
                    </div>
                    <h2 className="display-5">{props.bgText}</h2>
                    <h5>{props.bgPara}</h5>
                    <button>LET'S GET STARTED</button>
                </div>
                {/* </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default WebComponentData
