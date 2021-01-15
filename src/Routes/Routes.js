import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Services from '../Pages/Services';
import MVPDevelopment from '../Pages/MVPDevelopment';
import WebDevelopment from '../Pages/WebDevelopment';
import ArtificialIntelligence from '../Pages/ArtificialIntelligence';
import MobileApplication from '../Pages/MobileApplication';
import About from '../Pages/About';
import AboutClient from '../Pages/AboutClient';
import Work from "../Pages/Work"
import CaseStudy from "../Pages/CaseStudy"
import ResourcesNewsUpdate from '../Pages/ResourcesNewsUpdate';


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/mvp-development">
                        <MVPDevelopment />
                    </Route>
                    <Route exact path="/web-development">
                        <WebDevelopment />
                    </Route>
                    <Route exact path="/artificial-intelligence">
                        <ArtificialIntelligence />
                    </Route>
                    <Route exact path="/mobile-application">
                        <MobileApplication />
                    </Route>
                    <Route exact path="/about-process">
                        <About />
                    </Route>
                    <Route exact path="/about-client">
                        <AboutClient />
                    </Route>
                    <Route exact path="/work">
                        <Work />
                    </Route>
                    <Route exact path="/work/CaseStudy">
                        <CaseStudy />
                    </Route>
                    <Route exact path="/news-updates">
                        <ResourcesNewsUpdate />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
