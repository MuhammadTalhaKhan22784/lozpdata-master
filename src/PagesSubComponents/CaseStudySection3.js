import React from "react"
import CaseStudySection3Cards from "../Components/Utills/CaseStudySection3Cards"

let CaseStudySection3 = (props) => {
    return(
        <div className="CaseStudySection3">
            <div className="CaseStudySection3-child1">
                <h1>Foodly highlights</h1>
                <p>Burger, ice-cream, pizza or Chinese, Foodly has all types of restaurants available. The app is an exceptional addition to the mobile market for both average users and the restaurant owners.</p>
                <p>Foodly has various features that make it a fantastic evolution in the mobile app industry. Users and brand owners can set up their profiles. Users can manage their orders, view order status, check out the nearest restaurants, and more. Restaurants can list menus, categorize breakfast, lunch, and dinner, and more. Plus, they can build brand recognition with user ratings and reviews.</p>
            </div>

            <div className="CaseStudySection3-child2">
              <CaseStudySection3Cards heading="User profiles" para="Foodly allows users to set up their profiles with personal logins via email or social media." />
              <CaseStudySection3Cards heading="Restaurant lists" para="The app has restaurants offering various cuisines, including Chinese, French, Fast Food, and more." />
              <CaseStudySection3Cards heading="In-app navigation" para="Foodly allows users to search for restaurants near their location or track their order through the built-in map." />
              <CaseStudySection3Cards heading="My order status" para="Keep track of your order status from when it is placed, in process, confirmed, and on its way to the delivery point." />
              <CaseStudySection3Cards heading="Search filters" para="Refine your search with filters, such as restaurant types, food categories, and maximum delivery time or distance." />
              <CaseStudySection3Cards heading="In-app wallet" para="Foodly converts dollars spent into reward points. Users can share the earned points with their registered friends." />
            </div>

        </div>
    )
}

export default CaseStudySection3