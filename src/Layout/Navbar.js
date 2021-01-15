import React from 'react'
import { Link } from 'react-router-dom'
import MyVerticallyCenteredModal from '../Components/Modals/Modal'

const Navbar = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                        <ul className="navbar-nav ms-5 mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item ms-3">
                                <Link to="/services" className="nav-link nav-link-text" >Services</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link to="/mobile-application" className="nav-link nav-link-text" >Solutions</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link to="/mvp-development" className="nav-link nav-link-text" >Work</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/artificial-intelligence" className="nav-link nav-link-text" >About</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/web-development" className="nav-link nav-link-text" >Resources</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/contact" className="nav-link nav-link-text" >Contact</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#">866-978-2220</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link nav-link-text" href="#"><button onClick={() => setModalShow(true)} className="estimate_project_btn">Request a Quote</button></a>
                            </li>

                            <MyVerticallyCenteredModal

                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
