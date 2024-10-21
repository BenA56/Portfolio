import BackButton from "../library/BackButton"
import Mission from "./Mission"
import Problem from "./Problem"
import Constraints from "./Constraits"
import Process from "./Process"
import Users from "./Users"
import VersionControl from "./VersionControl"
import Generations from "./Generations"
import Results from "./Results"
import Learnings from "./Learnings"


function AIManualReviewTool(props) {
    return (
        <div style={{width: "100%"}}>

            <BackButton />

            {/* Hero */}
            <div className="sectionOuter">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "64px", marginTop: "-24px"}}>
                    <img src="/home/Signature.svg" alt="signature" width="92px" height="auto" />
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", maxWidth: "800px"}}>
                        <div className="h1"> AI Manual Review Tool </div>
                        <div className="b1 center"> A 2-year journey to create a flexible and efficient user-management system </div>
                        <div className="l1"> @Yerbba, 2022 - 2024 </div>
                    </div>
                </div>
                <div className="heroImages">
                    <img className="imgStyle" src="/Manual-Review.png" alt="report" width="100%" height="auto" />
                    <img className="imgStyle" src="/manReview/Prod-Users-Page.png" alt="compare" width="100%" height="auto" />
                    <img className="imgStyle" src="/manReview/Change-Log.png" alt="options" width="100%" height="auto" />
                </div>
            </div>

            <Mission />
            <Problem />
            <Constraints />
            <Process />
            <Users />
            <VersionControl />
            <Generations />
            <Results />
            <Learnings />

        </div>
    )
}

export default AIManualReviewTool