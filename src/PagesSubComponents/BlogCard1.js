import React from 'react'
import Navbar from '../Layout/navbar/navbar'
import '../Pages/Styles/Resources.css'
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'

const BlogCard1 = () => {
    return (
        <>
            <Navbar />
            <div className="blogcard-1">
                <div className="b-main-1">
                    <h2 className="display-6">SharePoint and Digital Asset Management</h2>
                    <img className="img-fluid" src="https://www.cubix.co/storage/app/uploads/public/600/18d/016/60018d016f78a505883607.jpg" />
                </div>
                <div className="blg-1-content">
                    <div className="b-main-2 mt-5">
                        <p className="fs-6">SharePoint and Digital Asset Management are quite common in terms of organizing, managing, and collaborating with assets. Both of them focus on empowering team members. Well, does this mean Digital Asset Management system eliminates the requirement of SharePoint altogether? To get your answer, you must understand what SharePoint and Digital Asset Management are and their offerings.</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">SharePoint</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">What is SharePoint? SharePoint is based on a website, which is a collaboration system. Due to its highly flexible nature, you can use this system for workflow applications, security features, databases, and other web parts to empower team members. SharePoint allows the company to have a common platform where they get the ability to control data accessibility. Also, companies can manage, store, and process documents according to workflow in every department.</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">Digital asset management</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">Digital Asset Management (DAM) is a fundamental source of certainty that allows a company to store, find, organize, manage, analyze, and distribute their digital content. Also, Digital Asset Management (DAM) boosts the benefits of every file, such as videos, images, and other media. In short, the DAM is a digital content storage and sharing solution.</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">What does DAM offer?</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">Before choosing the DAM solution, you must identify your needs and see if the DAM is the right solution or not. DAM solution offers a few core principles that are following;</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">Flexibility</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">There’s no value of DAM if you can’t retrieve and find your assets. Therefore, your asset management system should allow flexible metadata schemes. Flexibility allows you to modify labels and fields to go with your specific requirements. It also enables your intuitive retrieval and search.</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">System Adaptability</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">However, this results in having less stress, clutter, and higher productivity in your work environment.</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">Collaboration</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">Major aim of every company is to have a collaborative workplace with DAM. Digitalized companies seek a system that offers various tools to help in maintaining collaboration among assets. You can use DAM instead of email to enable more native, well-organized, and efficient discussion in any specific digital asset.</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">Distribution</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">Several digital assets are built to have efficient distribution. DAM system reflection distribution allows you to easily and quickly distribute data to more than one platform, including email, desktop, social media, and other destinations.</p>
                    </div>
                    <div className="b-main-3">
                        <h2 className="display-6">Reporting & Analytics</h2>
                    </div>
                    <div className="b-main-2">
                        <p className="fs-6">An ideal DAM system can deliver a huge number of custom reports. Reporting & analytics are the significant tools you can use to ensure maximum ROI of your DAM. If you fail to measure ROI, you won’t be able to improve.</p>
                    </div>
                    <div className="blogcard-end">
                        <div className="blg-end-1">
                            <div>
                                <span>SHARE ON</span>
                            </div>
                            <div className="blg-end-icons">
                                <a target="blank" href="https://web.facebook.com/LozpDataSolutions"><i className="fab fa-facebook-f" ></i></a>
                                <a target="blank" href="https://www.linkedin.com/company/lozpdatasolutions"><i className="fab fa-linkedin-in"></i></a>
                                <a target="blank" href="https://twitter.com/lozpdata"><i className="fab fa-twitter"></i></a>
                                <i className="fab fa-dribbble"></i>
                            </div>
                        </div>
                        <div className="blg-end-2">
                            <div>
                                <span>Published ON: <strong className="fs-6">Jan 18, 2021</strong></span>
                            </div>
                        </div>


                    </div>
                    <hr className="mt-5 mb-5" />
                    <h5 className="mbv-text fs-5 fw-bold">LOZPDATA</h5>
                    <hr className="mt-5 mb-5" />

                    <div className="blg-end-3">
                        <div>
                            <h5 className="fs-6">NEXT ARTICLE</h5>
                            <span className="fs-6">SharePoint and Digital Asset Management</span>
                        </div>
                        <div className="ms-4">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" stroke="#444" strokeWidth={2} x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve" width={24} height={24}><g transform="rotate(180 12,12) "><line strokeMiterlimit={10} x1={22} y1={12} x2={2} y2={12} strokeLinejoin="miter" strokeLinecap="butt" /><polyline strokeLinecap="square" strokeMiterlimit={10} points="9,19 2,12 9,5 " strokeLinejoin="miter" /></g></svg>
                        </div>
                    </div>
                </div>

            </div>
            <ProductExperienceSection />
            <Footer />
        </>
    )
}

export default BlogCard1
