import React from 'react'
import MyVerticallyCenteredModal from '../Components/Modals/Modal'
import Fade from 'react-reveal/Fade';

const ProductExperienceSection = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="prd-exp-section">
                <div className="prd-exp-items">
                    <Fade bottom duration={1500} delay={200}>
                        <h2 className="display-6 lh-base fw-bold">12 years of building digital products and we are just getting started!</h2>
                    </Fade>
                    <Fade bottom duration={1700} delay={400}>
                        <button onClick={() => setModalShow(true)}>START A PROJECT</button>
                    </Fade>
                    <MyVerticallyCenteredModal

                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductExperienceSection
