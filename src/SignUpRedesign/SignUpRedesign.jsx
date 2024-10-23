import BackButton from "../library/BackButton"
import ErrorHandling from "./ErrorHandling"
import FinalFlow from "./FinalFlow"
import FlexibleSearch from "./FlexibleSearch"
import "./Hero.css"
import Improvements from "./Improvements"
import Mission from "./Mission"
import Portal from "./Portal"
import Results from "./Results"
import Testing from "./Testing"
import Trust from "./Trust"
import SectionHeader from "../library/SectionHeader"
import CaseStudy from "../Home/CaseStudy"


function SignUpRedesign(props) {
    return (
        <div style={{width: "100%"}}>

            <BackButton />

            {/* Hero */}
            <div className="sectionOuter">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "64px", marginTop: "-24px"}}>
                    <img src="/home/Signature.svg" alt="signature" width="92px" height="auto" />
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", maxWidth: "800px"}}>
                        <div className="h1"> EHR Sign Up </div>
                        <div className="b1 center"> Creating a trustworthy sign up flow that encourages patients to give access to their electronic health records </div>
                        <div className="l1"> @Yerbba, Jun 2022 - Oct 2022 </div>
                    </div>
                </div>
                <div className="signUpHighlights">
                    <img className="hlLeft" src="/signup/Mobile-Search-Results.png" alt="report"/>
                    <img className="hlMiddle" src="/signup/Yerbba-Signup.png" alt="compare"/>
                    <img className="hlRight" src="/signup/Mobile-Accuracy-Check.png" alt="options"/>
                </div>
                <div className="basicSignUpHighlights">
                    <img className="basicOne" src="/signup/Yerbba-Signup.png" alt="report"/>
                    <div className="basicRow">
                        <img className="basicTwo" src="/signup/Mobile-Search-Results.png" alt="compare"/>
                        <img className="basicTwo" src="/signup/Mobile-Accuracy-Check.png" alt="options"/>
                    </div>
                </div>
            </div>

            <Mission />
            <FlexibleSearch />
            <Testing />
            <Trust />
            <Portal />
            <FinalFlow />
            <ErrorHandling />
            <Results />
            <Improvements />

            <div className="sectionOuter light">
                <SectionHeader
                    label="Next Up"
                    title="Check out another case study"
                    center={true}
                />
                <CaseStudy
                    img="/report/My-Reports.png"
                    title="The Yerbba Report"
                    desc="Empowering breast cancer patients to make educated decisions by transforming their medical records into a personazlized report"
                    page="BreastCancerReport"
                />
            </div>

        </div>
    )
}

export default SignUpRedesign