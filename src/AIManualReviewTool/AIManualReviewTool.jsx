import NavBar from "../NavBar"
import CaseStudies from "../CaseStudies"
import Banner from "../Banner"
import { manReviewContent } from "./manReviewContent"


function AIManualReviewTool(props) {
    return (
        <div className="App">
            <NavBar selectedTab="AI Manual Review Tool"/>
            <Banner
                title="AI Manual Review Tool"
                desc="Creating a tool for our team to review and edit breast cancer reports generated by our AI"
                role="Product Designer & F-E Developer"
                img="/Manual-Review.png"
                backgroundColor="#E2E2F0"
                accentColor="#5E5F7D"
                textColor="#1C1C2A"
            />
            <div className="caseStudyContent">

                {/* Background */}
                <div className="section">
                    <div className="header2"> Background </div>
                    <div className="bigContent"> {manReviewContent.background[0]} </div>
                    <div className="bigContent"> {manReviewContent.background[1]} </div>
                </div>

                {/* Basic REQS */}
                <div className="section">
                    <div className="header2"> Basic REQs </div>
                    <div className="bigContent"> <b>{manReviewContent.reqs[0]}</b> </div>
                    <ol style={{marginTop: "0px"}}>
                        <li className="bigContent"> {manReviewContent.reqs[1]} </li>
                        <li className="bigContent"> {manReviewContent.reqs[2]} </li>
                        <li className="bigContent"> {manReviewContent.reqs[3]} </li>
                        <li className="bigContent"> {manReviewContent.reqs[4]} </li>
                        <li className="bigContent"> {manReviewContent.reqs[5]} </li>
                        <li className="bigContent"> {manReviewContent.reqs[6]} </li>
                    </ol>
                    <div className="bigContent"> <b>{manReviewContent.reqs[7]}</b> </div>
                    <ol style={{marginTop: "0px", display: "flex", flexDirection: "column", gap: "24px"}}>
                        <li>
                            <div className="bullet">
                                <div className="bigContent"> {manReviewContent.reqs[8]} </div>
                                <img src="/manReview/Array-Of-Objects.png" alt="array" width="80%" height="auto" className="screenshot"/>
                                <div className="caption"> {manReviewContent.reqs[9]} </div>
                            </div>
                        </li>
                        <li className="bigContent"> {manReviewContent.reqs[10]} </li>
                        <li>
                            <div className="bullet">
                                <div className="bigContent"> {manReviewContent.reqs[11]} </div>
                                <img src="/manReview/Medical-Records.png" alt="array" width="80%" height="auto" className="screenshot"/>
                                <div className="caption"> {manReviewContent.reqs[12]} </div>
                            </div>
                        </li>
                        <li>
                            <div className="bullet">
                                <div className="bigContent"> {manReviewContent.reqs[13]} </div>
                                <img src="/Manual-Review.png" alt="array" width="80%" height="auto" className="screenshot"/>
                                <div className="caption"> {manReviewContent.reqs[14]} </div>
                            </div>
                        </li>
                    </ol>
                </div>

                {/* Process */}
                <div className="section">
                    <div className="header2"> Process </div>
                    <div className="bigContent"> {manReviewContent.process[0]} </div>
                    <ol style={{marginTop: "0px"}}>
                        <li className="bigContent"> {manReviewContent.process[1]} </li>
                        <li className="bigContent"> {manReviewContent.process[2]} </li>
                        <li className="bigContent"> {manReviewContent.process[3]} </li>
                        <li className="bigContent"> {manReviewContent.process[4]} </li>
                        <li className="bigContent"> {manReviewContent.process[5]} </li>
                    </ol>
                    <div className="bigContent"> {manReviewContent.process[6]} </div>
                    <img src="/manReview/Beltran-Proof.jpg" alt="proof" height="300px" width="auto" className="screenshot"/>
                    <div className="caption"> {manReviewContent.process[7]} </div>
                </div>

                {/* Key Improvements */}
                <div className="section">
                    <div className="header2"> Key Improvements </div>

                    {/* Users Page */}
                    <div className="bigContent"> {manReviewContent.improvements} </div>
                    <div className="subHeader"> {manReviewContent.userView[0]} </div>
                    <div className="bigContent"> {manReviewContent.userView[1]} </div>
                    <div className="bigContent"> {manReviewContent.userView[2]} </div>
                    <ul style={{marginTop: "0px", display: "flex", flexDirection: "column", gap: "16px"}}>
                        <li className="bigContent"> <b>{manReviewContent.userView[3]}</b> - {manReviewContent.userView[4]}</li>
                        <li className="bigContent"> <b>{manReviewContent.userView[5]}</b> - {manReviewContent.userView[6]}</li>
                    </ul>
                    <div style={{display: "flex", flexDirection: "row", gap: "48px", width: "848px", alignItems: "center"}}>
                        <div style={{position: "relative"}}>
                            <img src="/manReview/remove.png" alt="remove" width="48px" height="auto" style={{position: "absolute", right: "-24px", top: "-24px"}} />
                            <img src="/manReview/Reports-Page.png" alt="reports" width="400px" height="auto" className="screenshot"/>
                            <div className="caption" style={{marginTop: "16px"}}> {manReviewContent.userView[7]} </div>
                        </div>
                        <div style={{position: "relative"}}>
                            <img src="/manReview/check.png" alt="check" width="48px" height="auto" style={{position: "absolute", right: "-24px", top: "-24px"}} />
                            <img src="/manReview/Prod-Users-Page.png" alt="users" width="400px" height="auto" className="screenshot"/>
                            <div className="caption" style={{marginTop: "16px"}}> {manReviewContent.userView[8]} </div>
                        </div>
                    </div>

                    {/* Version Control */}
                    <div className="subHeader"> {manReviewContent.versionControl[0]} </div>
                    <div className="bigContent"> {manReviewContent.versionControl[1]} </div>
                    <ul style={{marginTop: "0px", display: "flex", flexDirection: "column", gap: "16px"}}>
                        <li className="bigContent"> <b>{manReviewContent.versionControl[2]}</b> - {manReviewContent.versionControl[3]}</li>
                        <li className="bigContent"> <b>{manReviewContent.versionControl[4]}</b> - {manReviewContent.versionControl[5]}</li>
                    </ul>
                    <img src="/Manual-Review.png" alt="array" width="80%" height="auto" className="screenshot"/>
                    <div className="caption"> {manReviewContent.versionControl[6]} </div>

                    {/* Change Log */}
                    <div className="subHeader"> {manReviewContent.changeLog[0]} </div>
                    <div className="bigContent"> {manReviewContent.changeLog[1]} </div>
                    <div className="bigContent"> {manReviewContent.changeLog[2]} </div>
                    <div className="bigContent"> {manReviewContent.changeLog[3]} </div>
                    <img src="/manReview/Change-Log.png" alt="array" width="80%" height="auto" className="screenshot"/>
                    <div className="caption"> {manReviewContent.changeLog[4]} </div>
                    <div className="bigContent"> {manReviewContent.changeLog[5]} </div>
                    <ul style={{marginTop: "0px", display: "flex", flexDirection: "column", gap: "16px"}}>
                        <li className="bigContent"> <b>{manReviewContent.changeLog[6]}</b> - {manReviewContent.changeLog[7]}</li>
                        <li className="bigContent"> <b>{manReviewContent.changeLog[8]}</b> - {manReviewContent.changeLog[9]}</li>
                    </ul>
                    <img src="/manReview/Diff-Checker.png" alt="array" width="80%" height="auto" className="screenshot"/>
                    <div className="caption"> {manReviewContent.changeLog[10]} </div>

                </div>

                {/* Lessons Learned */}
                <div className="section">
                    <div className="header2"> Lessons Learned </div>
                    <ul style={{marginTop: "0px", display: "flex", flexDirection: "column", gap: "16px"}}>
                        <li className="bigContent"> <b>{manReviewContent.lessons[0]}</b> - {manReviewContent.lessons[1]}</li>
                        <li className="bigContent"> <b>{manReviewContent.lessons[2]}</b> - {manReviewContent.lessons[3]}</li>
                        <li className="bigContent"> <b>{manReviewContent.lessons[4]}</b> - {manReviewContent.lessons[5]}</li>
                    </ul>
                </div>

                {/* Other Case Studies */}
                <div style={{display: "flex", flexDirection: "column", gap: "40px"}}>
                    <div className="header2"> Other Case Studies </div>
                    <div className="caseStudies">
                        <CaseStudies show={{
                            report: true,
                            signup: true,
                            review: false,
                            cards: true
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIManualReviewTool