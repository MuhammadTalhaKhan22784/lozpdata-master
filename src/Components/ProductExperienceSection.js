import React from 'react'
import MyVerticallyCenteredModal from '../Components/Modals/Modal'

const ProductExperienceSection = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="prd-exp-section">
                <div className="prd-exp-items">
                    <h2>12 years of building digital products and we are just getting started!</h2>
                    <button onClick={() => setModalShow(true)}>START A PROJECT</button>
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
