import BackButton from "../library/BackButton"
import SectionHeader from "../library/SectionHeader"
import CaseStudy from "../Home/CaseStudy"
import Problem from "./Problem"
import Origin from "./Origin"
import Concept from "./Concept"
import Testing from "./Testing"
import Improvements from "./Improvements"
import Learnings from "./Learnings"

function ActionBar(props) {
    return (
        <div style={{width: "100%"}}>

            <BackButton />

            {/* Hero */}
            <div className="sectionOuter">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "64px", marginTop: "-24px"}}>
                    <img src="/home/Signature.svg" alt="signature" width="92px" height="auto" />
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", maxWidth: "800px"}}>
                        <div className="h1"> Running AUS </div>
                        <div className="b1 center"> Underwriters could run AUS from anywhere in their loan? </div>
                        <div className="l1"> @UWM, 2025 - Present </div>
                    </div>
                </div>
                <div className="heroImages">
                    <img className="imgStyle" src="/aus/Run-AUS-Modal.png" alt="Run AUS modal" width="100%" height="auto" />
                </div>
            </div>

            <Problem />
            <Origin />
            <Concept />
            <Testing />
            <Improvements />
            <Learnings />

            <div className="sectionOuter">
                <SectionHeader
                    label="Next Up"
                    title="Check out another case study"
                    center={true}
                />
                <CaseStudy
                    img="/Manual-Review-Snapshot-2.png"
                    title="AI Manual Review Tool"
                    desc="Creating an efficient, flexible tool for manually reviewing AI-generated breast cancer reports"
                    page="AIManualReviewTool"
                />
            </div>

        </div>
    )
}

export default ActionBar
