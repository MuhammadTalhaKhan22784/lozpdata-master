import React from 'react'
import MyVerticallyCenteredModal from '../Modals/Modal'
import Fade from 'react-reveal/Fade';


const BackgroundSectionData = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="bg-slider">
                <div className="bg-slider-heading">
                    <Fade bottom duration={1000}>
                        <h2>{props.bgTest1}</h2>
                    </Fade>
                    <Fade bottom delay={300} duration={1000}>
                        <h2>{props.bgTest2}</h2>
                    </Fade>
                </div>
                <div className="bg-slider-para">
                    <Fade bottom delay={500} duration={1200}>
                        <p>{props.bgPara}</p>
                    </Fade>
                </div>
                <div className="bg-slider-btn">
                    <Fade bottom delay={600} duration={1300}>
                        <button onClick={() => setModalShow(true)}>LET'S TALK</button>
                    </Fade>
                </div>
                <MyVerticallyCenteredModal

                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>

        </>
    )
}

export default BackgroundSectionData
