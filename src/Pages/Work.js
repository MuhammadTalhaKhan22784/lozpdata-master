import React, { useState } from "react"
import "./Styles/work.css"
import Navbar from '../Layout/navbar/navbar'
import WorkSection1 from "../PagesSubComponents/WorkSection1"
import WorkSection2 from "../PagesSubComponents/WorkSection2"
import WorkSection3 from "../PagesSubComponents/WorkSection3"
import ProductExperienceSection from '../Components/ProductExperienceSection'
import Footer from '../Layout/Footer'

let Work = (props) => {
    let [number, setnumber] = useState(4)
    let obj = [
        {
            heading: "Hoops by tissot",
            para: "A basketball simulation game, for basketball enthusiasts and gaming geeks, with Tissot’s branding with just the right balance.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e8/aee/46b/5e8aee46b367e240233588.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e8/aee/4bb/5e8aee4bbbd17534308022.png",
            condition: "false",

        },
        {
            heading: "Hictic",
            para: "HicTic offers an alternative route to marketing brands and increasing engagement by targeting the mobile platform.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/750/9e4/5e67509e4905c496879520.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/893/ccb/5e6893ccb5dbd332661917.png",
            condition: "false",

        },

        {
            heading: "curious",
            para: "Curious is a revolution in the world of digital socializing, where it offers users a platform to express themselves with complete anonymity.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/746/ba6/5e6746ba67f39995288075.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/748/27a/5e674827ac65b627427272.png",
            condition: "true",
        },
        {
            heading: "Foodly",
            para: "Foodly lists all the world’s cuisines in its catalog so that people can curb their desire for a warm meal at any time of the day, anywhere in the world.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e7/073/62b/5e707362b67a9439565688.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/74f/3b1/5e674f3b1fcdd271436953.png",
            condition: "false"
        },

        {
            heading: "Qoot",
            para: "Order scrumptious food from hundreds of eateries, cafés, and restaurants. Enjoy street food from anywhere in the city and devour on delicious meals.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/739/74e/5e673974e9c66160977189.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/77a/ab9/5e677aab9e66f293724115.png",
            condition: "true"

        },
        {
            heading: "Bright farm",
            para: "A murder has been committed in the heart of Mexico. Your help is needed to find the clues and identify the murderer.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/737/647/5e673764701db596263273.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/89b/16a/5e689b16a85d6076597134.png",
            condition: "false",

        },
        {
            heading: "Time forge",
            para: "Enjoy a battle with monsters, collect coins, grab superpowers, and fight with the mega monster before you move to the level. A platform game for gaming geeks",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/73f/21b/5e673f21be584081958802.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/899/847/5e689984753df918895188.png",
            condition: "true",

        },

        {
            heading: "Ayr",
            para: "Determine the compatibility of your relations with a simple quiz, helping you in knowing your partner better!",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/73b/0cd/5e673b0cdfabd274994812.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/73b/e39/5e673be3971bf753336114.png",
            condition: "false",

        },
        {
            heading: "Fatherhood",
            para: "The Free 24/7 Dad To Go App by National Fatherhood Initiative for fathers to enjoy their responsibilities, by installing a time-sensitive checklist.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/770/203/5e6770203bf44050033133.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/89b/76e/5e689b76eedb5639535092.png",
            condition: "false"

        },
        {
            heading: "Cloud of venus",
            para: "Players will power up to enter new levels, attack stations, collect resources, and explore Venus to the fullest.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/652/db0/5e6652db00ecb739672124.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/785/243/5e6785243af0f414710997.png",
            condition: "true",

        },
        {
            heading: "Today today",
            para: "Get fresh and organic food items delivered to your address and prepare delicious meals for your family and friends.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e6/73b/0cd/5e673b0cdfabd274994812.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e6/23a/a0c/5e623aa0cd9fd857256915.png",
            condition: "false"
        },
        {
            heading: "Auto connect",
            para: "Auto Connect is an intuitive platform that connects automobiles buyers and sellers in a hassle-free marketplace.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e8/2f6/cff/5e82f6cff311c632894533.png",
            image: "https://www.cubix.co/storage/app/uploads/public/5e8/33e/692/5e833e692f636481116619.png",
            condition: "false"
        },
        {
            heading: "Tulsa airport",
            para: "Sharing flight schedules and updates, so users can know the status of flights and plan transit flights or trips accordingly.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e8/325/fa5/5e8325fa50b31110573041.png",
            image: "https://www.cubix.co/storage/app/uploads/public/5e8/2fa/a54/5e82faa541c0d767215104.png",
            condition: "true"
        },
        {
            heading: "Smart stop",
            para: "Smart Shop is a tracking platform for parents to track their children’s location when traveling to and from school.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e8/32b/ef6/5e832bef6fb9d885241734.png",
            image: "https://www.cubix.co/storage/app/uploads/public/5e8/2fe/f2b/5e82fef2bd914029886591.png",
            condition: "true"
        },
        {
            heading: "Everyrunn",
            para: "Achieve your fitness goals, rank running spots, interact with fellow runners, track your running, and share your fitness routine.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e8/af8/f88/5e8af8f8831e7818602509.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e8/af9/7d3/5e8af97d3773b163080706.png",
            condition: "false"
        },
        {
            heading: "Glimmer",
            para: "A social networking app for people with disabilities, allowing people to socialize, find people with similar disabilities, and build communities.",
            backgorundimage: "https://www.cubix.co/storage/app/uploads/public/5e8/af6/1d4/5e8af61d4fd1d998098433.jpg",
            image: "https://www.cubix.co/storage/app/uploads/public/5e8/af8/763/5e8af87639e11440450360.png",
            condition: "true"
        },
    ]


    return (
        <>
            <div>
                <Navbar />
                <WorkSection1 />
                {obj.slice(0, number).map((item, index) => {
                    return <WorkSection2 key={index} heading={item.heading} para={item.para} backgorundimage={item.backgorundimage} image={item.image} condition={item.condition} />
                })}
                <WorkSection3 obj={obj} number={number} setnumber={setnumber} />


            </div>
            <ProductExperienceSection />
            <Footer />
        </>
    )
}

export default Work