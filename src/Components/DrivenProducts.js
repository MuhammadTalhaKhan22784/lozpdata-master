import React from 'react'
import PrdCards from './Utills/PrdCards'

const DrivenProducts = () => {

    const AppiconName=["fas fa-mobile-alt fa-3x"]
    const GameiconName=["fas fa-gamepad fa-3x"]
    const WebiconName=["fas fa-blog fa-3x"]
    const BlockchainiconName=["fas fa-unlink fa-3x"]
   
    const AppiconTextOne=["App"]   
    const AppiconTextTwo=["Development"]
    const GameiconTextOne=["Game"]   
    const GameiconTextTwo=["Development"]
    const WebiconTextOne=["Web"]   
    const WebiconTextTwo=["Development"]
    const BlockchainiconTextOne=["Blockchain"]   
    const BlockchainiconTextTwo=["Development"]
    // const GameiconName=["fas fa-mobile-alt fa-3x"]
    // const GameiconTextOne=["App"]   
    // const GameiconTextTwo=["Development"]

    return (
        <>
            <div className="products-content">
                <div className="prd-con-items">
                    <span>Imagine, Design, Development, Test</span>
                    <h2 className="fs-3">LozpData is a software development company that provides cutting edge engineering solutions, helping Fortune 300 companies, Startups And Enterprises to develop premium product during their digital evolution journey.</h2>
                </div>
                <div className="prd-con-cards container">
                    <PrdCards AppiconName={AppiconName} AppiconTextOne={AppiconTextOne} AppiconTextTwo={GameiconTextTwo}/>
                    <PrdCards AppiconName={GameiconName} AppiconTextOne={GameiconTextOne} AppiconTextTwo={AppiconTextTwo}/>
                    <PrdCards AppiconName={WebiconName} AppiconTextOne={WebiconTextOne} AppiconTextTwo={WebiconTextTwo}/>
                    <PrdCards AppiconName={BlockchainiconName} AppiconTextOne={BlockchainiconTextOne} AppiconTextTwo={BlockchainiconTextTwo}/>
                
                </div>
            </div>
        </>
    )
}

export default DrivenProducts
