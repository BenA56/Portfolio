import NavBar from "../NavBar"
import CaseStudies from "../CaseStudies"
import { reportContent } from "./reportContent"
import Banner from "../Banner.jsx"
import SectionHeader from "../library/SectionHeader.jsx"
import BackButton from "../library/BackButton.jsx"
import "../library/Sections.css";
import "./ReportRedesign.css";
import BulletPoint from "../library/BulletPoint.jsx"
import Mission from "./Mission.jsx"
import Stakeholders from "./Stakeholders.jsx"
import Competitors from "./Competitors.jsx"
import Constraints from "./Constraints.jsx"
import Research from "./Research.jsx"
import Navigation from "./Navigation.jsx"
import DesignSystem from "./DesignSystem.jsx"
import TreatCategories from "./TreatCategories.jsx"
import TreatOptions from "./TreatOptions.jsx"
import Testing from "./Testing.jsx"
import Launch from "./Launch.jsx"
import Learnings from "./Learnings.jsx"

function ReportRedesign(props) {
    return (
        <div style={{width: "100%"}}>

            <BackButton />

            {/* Yerbba Hero */}
            <div className="sectionOuter">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "64px", marginTop: "-24px"}}>
                    <img src="/home/Signature.svg" alt="signature" width="92px" height="auto" />
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", maxWidth: "800px"}}>
                        <div className="h1"> The Yerbba Report </div>
                        <div className="b1 center"> Empowering breast cancer patients to make educated decisions by transforming their medical records into a personazlized report </div>
                        <div className="l1"> @Yerbba, Jan 2023 - Feb 2024 </div>
                    </div>
                </div>
                <div className="heroImages">
                    <img className="imgStyle" src="/report/My-Reports.png" alt="report" width="100%" height="auto" />
                    <img className="imgStyle" src="/report/Options-Timing.png" alt="compare" width="100%" height="auto" />
                    <img className="imgStyle" src="/report/Treatment-Options.png" alt="options" width="100%" height="auto" />
                </div>
            </div>

            <Mission />
            <Stakeholders />
            <Competitors />
            <Constraints />
            <Research />
            <Navigation />
            <DesignSystem />
            <TreatCategories />
            <TreatOptions />
            <Testing />
            <Launch />
            <Learnings />
            
        </div>
    )
}

export default ReportRedesign