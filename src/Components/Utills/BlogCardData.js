import React from 'react'
import { Link } from 'react-router-dom'
import '../../Pages/Styles/Resources.css'
const BlogCardData = () => { 
    return (
        <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <Link to="blog-card-1">
                    <div className="blog-card card" style={{ width: "22rem" }}>
                        <img src="https://www.cubix.co/storage/app/uploads/public/600/5a3/774/thumb_850_500_300_0_0_auto.jpg" className="card-img-top" alt="..." />
                        <div className="blog-card-body card-body">
                            <h5 className="fs-5 card-title">GROWTH</h5>
                            <p className="fs-5 pt-2 card-text">Waterfall vs Agile Development: Which is the Best Methodology for You?</p>
                            <div className="blg-icon-1 pt-2">
                                <img src="https://digiryte.com/blog/assets/calender-59fcb70f976b9bbc8faf649512dccba9147826687ca6a0f167b6fb8174fb2a1b.png" />
                                <span className="ms-2 fs-6">April 07, 2020 09:27</span>
                            </div>
                            <div className="blg-icon-2 mt-3">
                                <div>
                                    <img src="https://digiryte.com/blog/assets/icon2-8f21fc2e212c193d3ec3506a07a13f1dd521757b107c867ae2d87fb1558f9005.png" />
                                    <span className="ms-2 fs-6">5 min Read</span>
                                </div>
                                <div className="pe-5">
                                    <img src="https://digiryte.com/blog/assets/icon3-7a4d6c97f960c1cb8f21bfe572f8f3bed8ab07ce70bc33f828ec80f5079379b6.png" />
                                    <span className="ms-2 fs-6">353 Views so far</span>
                                </div>
                            </div>
                            {/* <p className="fs-6">There have been tremendous shifts in the business technology landscape in the past few years. We...</p>
                        <a href="#" className="btn-continue"><span>Continue Reading</span></a> */}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogCardData
