import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './hover.css'

const ResourcesModel = ({ open2 }) => {
    // console.log(value)
    let [open, setOpen] = useState(false)

    return (
        <div className={!open2 ? 'main_model_div' : ''}>
            <div className={!open2 ? 'sub_model_div' : '.sub_model_div2'}>
                <div className='info_div'>
                    <h3> Resources </h3>
                    <div className={!open2 ? 'para_div' : 'para2_div'}

                    >
                        <p>
                            Explore data-rich insights from our content experts and tech geeks, bringing interesting updates from across the globe.

                        </p>

                    </div>
                </div>
                <div className='services_div'>
                    <h3> Explore </h3>
                    <div className={!open2 ? 'service_link_div' : '.service_link_div2'}>
                        <ul className='service_ul'>
                            <li>
                                <Link to="/blog" className='link'
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                >
                                    Blog
                                </Link>
                                <p>
                                    Stuff that Matters
                                </p>
                            </li>
                            {/* <li>
                                <Link to="/" className='link'
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                >
                                    Press release
                                </Link>
                                <p>
                                    From our media desk
                                </p>
                            </li> */}
                        </ul>
                        <ul className='service_ul2'>
                            <li>
                                <Link
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                    to="/news-updates" className='link' >News & Updates</Link>
                                <p>Stay Informed about us</p>
                            </li>
                            {/* <li>
                                <Link to="/"
                                    onClick={() => { setOpen(false); document.body.classList.remove('scroll'); }}
                                    className='link'>Events</Link>
                                <p>Global tech events</p>
                            </li> */}

                        </ul>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default ResourcesModel;