import React from 'react'
import '../Pages/Styles/WebDevelopment.css'
import Fade from 'react-reveal/Fade';

const WebDevelopmentSection6 = (props) => {
    return (
        <>
            <div className="web-dev-sec-6" >
                <div style={{ flexDirection: props.isReplace ? 'row-reverse' : 'flex' }}
                    className="web-card-main ">
                    <Fade bottom duration={2000} delay={200}>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="web-card-text">
                                <h2 >Software as a service</h2>
                                <h5 >We provide Software-as-a-Service to clients’ to help them put resources to more efficient use and make informed business decisions. Our SaaS products help companies grow exponentially and penetrate untapped markets through better strategic planning and trend forecasts.</h5>
                                <h5>Cubix’s Software-as-a-Service solutions are used by Fortune 500 companies, allowing them to take advantage of the latest technology and boost business multiple-fold.</h5>
                            </div>
                        </div>
                    </Fade>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <img className="img-fluid" src="https://www.cubix.co/themes/responsiv-clean/assets/images/web-development/software-as-a-service-1.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebDevelopmentSection6
