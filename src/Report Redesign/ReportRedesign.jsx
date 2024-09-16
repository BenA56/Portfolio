import NavBar from "../NavBar"
import MyRole from "../MyRole"
import CaseStudyHeader from "../CaseStudyHeader"
import Warning from "../Warning"
import CaseStudies from "../CaseStudies"
import { reportContent } from "./reportContent"
import Banner from "../Banner.jsx"


function ReportRedesign(props) {
    return (
        <div>
            <NavBar selectedTab="Breast Cancer Report"/>

            <Banner
                title="The Yerbba Report"
                desc="Creating a personalized breast cancer report to help patients take ownership of their treatment journey"
                role="Product Designer & F-E Developer"
                img="/Summary-Options.png"
                backgroundColor="#1C1C2A"
                accentColor="#A2A5D6"
                textColor="white"
            />

            <div className="App">
            <div className="caseStudyContent">

                {/* The Opportunity */}
                <div className="section">
                    <div className="header2"> The Opportunity </div>
                    <div className="bigContent" style={{fontStyle: "italic"}}> {reportContent.opportunity[0]} </div>
                    <div className="bigContent"> {reportContent.opportunity[1]} </div>
                    <div className="bigContent"> {reportContent.opportunity[2]} </div>

                    {/* Problem #1 */}
                    <div>
                        <div className="bigContent"> {reportContent.opportunity[3]} </div>
                        <ul style={{marginTop: "8px"}}>
                            <li className="bigContent"> {reportContent.opportunity[4]} </li>
                            <li className="bigContent"> {reportContent.opportunity[5]} </li>
                            <li className="bigContent"> {reportContent.opportunity[6]} </li>
                        </ul>
                    </div>

                    {/* Problem #2 */}
                    <div>
                        <div className="bigContent"> {reportContent.opportunity[7]} </div>
                        <ul style={{marginTop: "8px"}}>
                            <li className="bigContent"> {reportContent.opportunity[8]} </li>
                            <li className="bigContent"> {reportContent.opportunity[9]} </li>
                        </ul>
                    </div>
                </div>

                {/* Context */}
                <div className="section">
                    <div className="header2"> The Context </div>
                    <div className="list">
                        <div className="bigContent"> <b>The Company</b> - Yerbba, a 5-person startup </div>
                        <div className="bigContent"> <b>My Role</b> - Product Designer and F-E Developer </div>
                        <div className="bigContent"> <b>The Project Team</b> - CEO/Founder and Me </div>
                        <div className="bigContent"> <b>Duration</b> - 6 months design + 8 months development = 14 months </div>
                    </div>
                    <img src="/report/Old-Yerbba.png" alt="old" width="100%" height="auto" />
                    <div className="content" className="caption"> Summary page of the old Yerbba Report </div>
                    <div className="bigContent"> {reportContent.context}<b>{reportContent.goal}</b> </div>
                </div>

                {/* Preliminary Research */}
                <div className="section">
                    <div className="header2"> Preliminary Research </div>
                    <div className="bigContent"> {reportContent.research[0]} </div>
                    <div className="bigContent"> {reportContent.research[1]} </div>
                    <img src="/report/Research-Screenshots.png" alt="research" width="1000px" height="auto" />
                    <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                        <div className="caption"> Grouping notes to create themes from (left to right): </div>
                        <div className="caption"> usability test #1 (friends & family) </div>
                        <div className="caption"> usability test #2 (breast cancer patients via UserBrain) </div>
                        <div className="caption"> stakeholder interviews with Dr. Jennifer Griggs </div>
                    </div>
                    <div className="list">
                        <div className="bigContent"> <b>Conclusion #1</b> - {reportContent.conclusions[0]} </div>
                        <div className="bigContent"> <b>Conclusion #2</b> - {reportContent.conclusions[1]} </div>
                        <div className="bigContent"> <b>Conclusion #3</b> - {reportContent.conclusions[2]} </div>
                        <div className="bigContent"> <b>Conclusion #4</b> - {reportContent.conclusions[3]} </div>
                    </div>
                </div>

                {/* Design Iteration */}
                <div className="section">
                    <div className="header2"> Design Iteration </div>
                    <div className="bigContent"> {reportContent.iteration[0]} </div>
                    <div className="bigQuote"> "{reportContent.iteration[1]}" </div>
                    <div style={{display: "flex", flexDirection: "row", gap: "48px"}}>
                        <img src="/report/Sketches-1.png" alt="sketch" width="230px" height="auto" />
                        <img src="/report/Sketches-2.png" alt="sketch" width="230px" height="auto" />
                    </div>
                    <div className="caption"> {reportContent.iteration[2]} </div>
                    <div className="bigContent"> {reportContent.iteration[3]} </div>
                    <ul>
                        <li className="bigContent"> <b>{reportContent.iteration[4]}</b> {reportContent.iteration[5]} </li>
                        <li className="bigContent"> <b>{reportContent.iteration[6]}</b> {reportContent.iteration[7]} </li>
                        <li className="bigContent"> <b>{reportContent.iteration[8]}</b></li>
                    </ul>
                    <img src="/report/Figma-Board.png" alt="figma" width="100%" height="auto" />
                    <div className="caption"> {reportContent.iteration[9]} </div>
                    <div className="bigContent"> {reportContent.iteration[10]} </div>
                    <div className="bigQuote"> "{reportContent.iteration[11]}" </div>
                </div>

                {/* Deep Dive #1 */}
                <div className="deepDive">
                    <div className="deepDiveLabel">
                        <div className="bigContent"> Deep Dive #1 </div>
                    </div>
                    <div className="header2"> Treatment Categories Visualization </div>
                    <div className="bigContent"> {reportContent.visualization[0]} </div>
                    <div>
                        <div className="bigContent"> 1. {reportContent.visualization[1]} </div>
                        <ul style={{marginTop: "8px"}}>
                            <li className="bigContent"> "{reportContent.visualization[2]}" </li>
                            <li className="bigContent"> "{reportContent.visualization[3]}" </li>
                            <li className="bigContent"> "{reportContent.visualization[4]}" </li>
                            <li className="bigContent"> "{reportContent.visualization[5]}" </li>
                        </ul>
                    </div>
                    <div className="bigContent"> 2. {reportContent.visualization[6]} </div>
                    <div className="bigContent"> {reportContent.visualization[7]} </div>
                    <div className="bigContent"> {reportContent.visualization[8]} </div>
                    <div className="bigContent"> {reportContent.visualization[9]} </div>
                    <img src="/report/Visualizations.png" alt="vis" width="100%" height="auto"/>
                    <div className="bigContent"> {reportContent.visualization[10]} </div>
                    <div className="bigContent"> {reportContent.visualization[11]} </div>
                    <div className="bigContent"> {reportContent.visualization[12]} </div>
                    <div className="bigContent"> {reportContent.visualization[13]} </div>
                    <img src="/report/Final-Options.png" alt="final" width="100%" height="auto"/>
                </div>

                {/* Testing */}
                <div className="section">
                    <div className="header2"> Prototype and Usability Testing </div>
                    <div className="bigContent"> {reportContent.testing[0]} </div>
                    <div className="bigQuote"> "{reportContent.testing[1]}" </div>
                    <img src="/report/research-screenshots-2.png" alt="report" width="1000px" height="auto" />
                    <div className="caption"> Synthesizing qualitative usability data to make improvements between each round of testing </div>
                    <div className="bigContent"> {reportContent.testing[2]} </div>
                </div>

                {/* Deep Dive #2 */}
                <div className="deepDive">
                    <div className="deepDiveLabel">
                        <div className="bigContent"> Deep Dive #2 </div>
                    </div>
                    <div className="header2"> Treatment Options Discoverability </div>
                    <div className="bigContent"> {reportContent.deepDive2[0]} </div>
                    <div className="bigContent"> {reportContent.deepDive2[1]} </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "24px"}}>
                        <div className="deepDiveLabel">
                            <div className="bigContent"> No one clicks on the cards :( </div>
                        </div>
                        <img src="/report/Bad-Cards.png" alt="bad" width="100%" height="auto" />
                    </div>
                    <div className="bigContent"> {reportContent.deepDive2[2]} </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "48px", alignItems: "center"}}>
                        <div className="deepDiveLabel">
                            <div className="bigContent"> Now they click :) </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "24px"}}>
                            <img src="/report/Mobile-Options-1.png" alt="options" width="150px" height="auto" />
                            <img src="/report/Mobile-Options-2.png" alt="options" width="150px" height="auto" />
                            <img src="/report/Mobile-Options-3.png" alt="options" width="150px" height="auto" />
                            <img src="/report/Mobile-Options-4.png" alt="options" width="150px" height="auto" />
                        </div>
                        <img src="/report/Options-Research.png" alt="research" width="100%" height="auto" />
                    </div>
                </div>

                {/* Launch */}
                <div className="section">
                    <div className="header2"> Launch </div>
                    <div className="bigContent"> {reportContent.launch} </div>
                    <iframe src="https://drive.google.com/file/d/1j8cF4zUwlQW2twcn9kJyZNldQyevPGDY/preview" width="100%" height="380px"></iframe>
                    <div className="caption"> Walkthrough of the final Yerbba Report </div>
                </div>

                {/* Lessons Learned */}
                <div className="section">
                    <div className="header2"> Lessons Learned </div>
                    <ul>
                        <li className="bigContent"> <b>{reportContent.lessons[0]}</b> - {reportContent.lessons[1]} </li>
                        <li className="bigContent"> <b>{reportContent.lessons[2]}</b> - {reportContent.lessons[3]} </li>
                        <li className="bigContent"> <b>{reportContent.lessons[4]}</b> - {reportContent.lessons[5]} </li>
                        <li className="bigContent"> <b>{reportContent.lessons[6]}</b> - {reportContent.lessons[7]} </li>
                        <li className="bigContent"> <b>{reportContent.lessons[8]}</b> - {reportContent.lessons[9]} </li>
                        <li className="bigContent"> <b>{reportContent.lessons[10]}</b> - {reportContent.lessons[11]} </li>
                    </ul>
                </div>
                
                {/* Other Case Studies */}
                <div style={{display: "flex", flexDirection: "column", gap: "40px"}}>
                    <div className="header2"> Other Case Studies </div>
                    <div className="caseStudies">
                        <CaseStudies show={{
                            report: false,
                            signup: true,
                            review: true,
                            cards: true
                        }} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ReportRedesign