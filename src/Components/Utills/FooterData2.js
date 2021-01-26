import React from 'react'
import { Link } from 'react-router-dom'

const FooterData2 = (props) => {
    return (
        <>
            {props.isShow ?

                < div className="footer-data-2">
                    <h2>{props.ftName}</h2>
                    <Link className="ft-links" to="mobile-application"><p>{props.ftText1}</p></Link>
                    <Link className="ft-links" to="web-development"><p>{props.ftText2}</p></Link>
                    <Link className="ft-links" to="mvp-development"><p>{props.ftText3}</p></Link>
                    <Link className="ft-links" to="artificial-intelligence"><p>{props.ftText4}</p></Link>
                </div>
                : <div className="footer-data-2">
                    <h2>{props.ftName}</h2>
                    <p>{props.ftText1}</p>
                    <p>{props.ftText2}</p>
                    <p>{props.ftText3}</p>
                    <p>{props.ftText4}</p>
                </div>
            }

        </>
    )
}

export default FooterData2
