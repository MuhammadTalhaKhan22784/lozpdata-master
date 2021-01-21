import React from 'react'
import Fade from 'react-reveal/Fade';

const WebComponentData = (props) => {
    return (
        <>
 
            <div

                style={{
                    backgroundImage: props.isBgReplace ?
                        `url(https://www.cubix.co/themes/responsiv-clean/assets/images/artificial-intelligence/artificial-intelligence-machine-learning.jpg)`
                        : `url(https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development.jpg)`
                },
                {
                    backgroundImage: props.isShow ? `url(https://www.cubix.co/themes/responsiv-clean/assets/images/process/cubix-process.jpg)`
                        : `url(https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/web-development.jpg)`
                }} className="bg-web-development">


                <div className="bg-web-dev-content ms-4 ">
                    <Fade bottom duration={1200} delay={200}>
                        <div style={{
                            display: props.isShow ? `none` : `block`
                        }} className="bg-web-icon">
                            <img src={props.imgIcon} />
                        </div>
                    </Fade>
                    <Fade bottom duration={1200} delay={300}>
                        <h2 className="display-5">{props.bgText}</h2>
                    </Fade>
                    <Fade bottom duration={1200} delay={400}>
                        <h5 className="lh-base">{props.bgPara}</h5>
                    </Fade>
                    <Fade bottom duration={1200} delay={500}>
                        <button>LET'S GET STARTED</button>
                    </Fade>
                </div>

            </div>
        </>
    )
}

export default WebComponentData
