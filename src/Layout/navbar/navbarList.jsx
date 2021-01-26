import React, { useState } from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ServiceModel from '../navbar/models/sevicemodel'
import SolutionModel from '../navbar/models/solution'
import AboutModel from '../navbar/models/about'
import ResourcesModel from '../navbar/models/resources'
import { Link } from 'react-router-dom';
import MyVerticallyCenteredModal from '../../Components/Modals/Modal';


// import HoverModel from './service/aboutModel'
const NavList = ({ hideFunc, showFunc, openList, hide, vertical, aboutFunc, hideAbout, color, setcolor }) => {
    // console.log(vertical)
    const [modalShow, setModalShow] = React.useState(false);
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    let [value, setValue] = useState('')

    const handleShoww = (e) => {
        setValue(e)
        setOpen(!open)

    }
    const handleAbout = (e) => {
        setValue(e)
        setOpen2(!open2)

    }


    return (
        <div className='main_navList_div'>
            {!openList ?

                <div className='navList_div'>
                    <ul className='navList_ul'  >
                        <li

                            onMouseOver={showFunc}
                            onMouseLeave={hideFunc}
                            value='1'
                            //   className='servicesss'
                            className={!vertical ? 'servicesss ' : 'servicesss2'}
                        ><Link

                            onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}

                            to="/services" className={!vertical ? `servicesss ${color ? "act" : ""}  ` : 'servicesss2'} >Services</Link>

                            <div className='model_div'>
                                <ServiceModel value={value} />

                            </div>

                        </li>
                        {/* <li

                            value='2' className={!vertical ? `solutions ${color ? "act" : ""} ` : 'solutions2 '}
                            onMouseOver={showFunc}
                            onMouseLeave={hideFunc}
                        >Solutions
                        <div className='model_div2'>
                                <SolutionModel />

                            </div>
                        </li> */}
                        <li className={!vertical ? `works ${color ? "act" : ""}` : 'work2'}>
                            <Link
                                onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                to="/work" className={!vertical ? `works ${color ? "act" : ""}` : 'work2'} >Work</Link>

                        </li>
                        <li
                            value='3' className={!vertical ? `abouts ${color ? "act" : ""}` : `about2 `}
                            onMouseOver={showFunc}
                            onMouseLeave={hideFunc}
                        ><Link
                            onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                            to="/about" className={!vertical ? `abouts ${color ? "act" : ""}` : `about2 `} >About</Link>
                            <div className='model_div3'>
                                <AboutModel />

                            </div>
                        </li>
                        <li
                            onMouseOver={showFunc}
                            onMouseLeave={hideFunc}
                            value='4' className={!vertical ? `resourcess ${color ? "act" : ""}` : 'resourcess2'}
                        ><Link
                            onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}

                            className={!vertical ? `resourcess ${color ? "act" : ""}` : 'resourcess2'} >Resources</Link>
                            <div className='model_div4'

                            >
                                <ResourcesModel />

                            </div>
                        </li>

                        <li className={!vertical ? `contacts ${color ? "act" : ""}` : 'contacts2'}>
                            <Link to="/contact" className={!vertical ? `contacts ${color ? "act" : ""}` : 'contacts2'} >Contact</Link>
                        </li>
                        {/* <li className={!vertical ? `cl_li ${color ? "act" : ""}` : 'cl_li2'}>
                            <PhoneIcon className='callIcon' />
                            <p className="mt-3 ms-3"> +923104267558</p>
                        </li> */}
                        <li>
                            <button onClick={() => setModalShow(true)} className={`estimate_btn ${color ? "act" : ""}`}>Request a Quote</button>
                        </li>

                        <MyVerticallyCenteredModal

                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </ul>
                </div>
                :

                <div className='div_list2'>
                    <div className='main_list2'>
                        <ul className='list_ul2'>
                            <li className='services' >
                                <Link to="/services"
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                    className={!vertical ? `servicesss ${color ? "act" : ""}  ` : 'servicesss2'} >Services</Link>
                                {/* <p>Services</p> */}
                                <ExpandMoreIcon className='expand' name='2' onClick={() => handleShoww('services')} />
                            </li>
                            {open === true && value === 'services' ?

                                <ul>
                                    {/* <HoverModel value={value} openn={open} /> */}
                                    <ServiceModel openn={open} />
                                </ul>
                                : null
                            }
                            {/* <li className='solution'>
                                <p>Solutions</p>
                                <ExpandMoreIcon className='expand' onClick={() => handleShoww('solution')} />
                            </li> */}
                            {open === true && value == 'solution' ?

                                <ul>
                                    <SolutionModel value={value} openn={open} />
                                </ul>
                                : null
                            }
                            <li className='work'>
                                <Link
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                    to="/work" className={!vertical ? `works ${color ? "act" : ""}` : 'work2'} >Work</Link>
                                {/* <p>Work</p> */}
                            </li>
                            <li className='about'>
                                <Link
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                    to="/about" className={!vertical ? `abouts ${color ? "act" : ""}` : `about2 `} >About</Link>

                                <ExpandMoreIcon className='expand' onClick={() => handleAbout('about')} />
                            </li>
                            {open2 === true && value == 'about' ?

                                <ul>
                                    <AboutModel value={value} open2={open2} />
                                </ul>
                                : null
                            }
                            <li className='resources' >
                                {/* <p>Resource</p> */}
                                <Link
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                    className={!vertical ? `resourcess ${color ? "act" : ""}` : 'resourcess2'} >Resources</Link>
                                <ExpandMoreIcon className='expand'

                                    onClick={() => handleAbout('resources')} />
                            </li>
                            {open2 === true && value == 'resources' ?

                                <ul>
                                    <ResourcesModel value={value} open2={open2} />
                                </ul>
                                : null
                            }
                            <li className='contact'>
                                <Link

                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}

                                    to="/contact" className={!vertical ? `contacts ${color ? "act" : ""}` : 'contacts2'} >Contact</Link>
                                {/* <Link to="/contact"><p>Contact</p></Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavList