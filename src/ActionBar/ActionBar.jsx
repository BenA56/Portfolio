import BackButton from "../library/BackButton"
import CaseStudySwitcher from "../library/CaseStudySwitcher"
import ProfileWidget from "../library/ProfileWidget"
import Problem from "./Problem"
import Journey from "./Journey"
import FinalScreenshots from "./FinalScreenshots"

function ActionBar(props) {
    return (
        <div style={{width: "100%"}}>

            <BackButton />
            <CaseStudySwitcher current="ActionBar" />
            <ProfileWidget />

            {/* Hero */}
            <div className="sectionOuter">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "64px", marginTop: "-24px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", maxWidth: "800px"}}>
                        <div className="h1"> Running AUS </div>
                        <div className="b1 center"> What if underwriters could run AUS from anywhere in their loan? </div>
                        <div className="l1"> @United Wholesale Mortgage (UWM) </div>
                    </div>
                </div>
                <div className="heroImages">
                    <img className="imgStyle" src="/aus/Run-AUS-Modal.png" alt="Run AUS modal" width="100%" height="auto" />
                </div>
            </div>

            <Problem />
            <Journey />
            <FinalScreenshots />

        </div>
    )
}

export default ActionBar
