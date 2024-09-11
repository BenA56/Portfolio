import NavBar from "../NavBar"
import MyRole from "../MyRole"
import CaseStudyHeader from "../CaseStudyHeader"
import Warning from "../Warning"
import CaseStudies from "../CaseStudies"
import { reportContent } from "./reportContent"
import Banner from "../Banner.jsx"

const content = {
    background: "Before I joined the company they had released a first version of the report. The purpose of the first version was to prove that it could be done so not much attention was paid to the actual user experience.",
    problemsWithOriginal: [
        "Important content, for example specific treatment options, is hidden beneath layers of navigation. As a result, users rarely cash in on the true value of their report.",
        "Many users have described the report as “cold” and “medical”. The new version of the report should be warm and caring.",
        "The only navigation structure used for the report is breadcrumbs. Getting to other pages always requires multiple clicks."
    ],
    problemsSolved: [
        "Designed a new vertical navigation that can be accessed from anywhere within the report for easy switches between pages",
        "Designed a summary page that brings valuable root-level content, such as specific chemotherapy regimens, to the forefront for better discoverability",
        "Designed a component flexible enough to display details and important comparisons between all types of chemotherapy regimens",
        "Designed a component to display various breast cancer traits",
        "Designed a feature for users to be able to write their own questions at any time as they’re reading through their report.",
        "Designed a feature for users to be able to either submit their questions to a Yerbba expert for a personalized answer or save their questions to be better prepared for their appointments",
        "Implemented a design system so that the same type of objects in the report have a consistent design with enough flexibility to account for all situations and states",
        "Applied a new color scheme to the design system with colors that communicate warmness and care",
        "Designed the report with a responsive, mobile-first approach since over 50% of our users access their report on their mobile device"
    ]
}

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
                    <div className="bigContent"> {reportContent.opportunity[3]} </div>
                    <div className="bigContent"> {reportContent.opportunity[4]} </div>
                    <div className="bigContent"> {reportContent.opportunity[5]} </div>
                    <div className="bigContent"> {reportContent.opportunity[6]} </div>
                    <div className="bigContent"> {reportContent.opportunity[7]} </div>
                    <div className="bigContent"> {reportContent.opportunity[8]} </div>
                    <div className="bigContent"> {reportContent.opportunity[9]} </div>
                </div>

                {/* Context */}
                <div className="section">
                    <div className="header2"> The Context </div>
                    <div className="bigContent"> The Company: Yerbba, a 5-person startup </div>
                    <div className="bigContent"> My Role: Product Designer and F-E Developer </div>
                    <div className="bigContent"> The Project Team: CEO/Founder + ME + Rotating Intern </div>
                    <div className="bigContent"> Duration: 6 months design + 8 months development = 14 months </div>
                    <img src="/report/Old-Yerbba.png" alt="old" width="100%" height="auto" />
                    <div className="content" style={{color: "#808080"}}> Summary page of the old Yerbba Report </div>
                    <div className="bigContent"> {reportContent.context} </div>
                </div>

                {/* Preliminary Research */}
                <div className="section">
                    <div className="header2"> Preliminary Research </div>
                    <div className="bigContent"> {reportContent.research[0]} </div>
                    <div className="bigContent"> {reportContent.research[1]} </div>
                    <img src="/report/Research-Screenshots.png" alt="research" width="1000px" height="auto" />
                    <div className="label"> Conclusion #1 </div>
                    <div className="bigContent"> {reportContent.conclusions[0]} </div>
                    <div className="label"> Conclusion #2 </div>
                    <div className="bigContent"> {reportContent.conclusions[1]} </div>
                    <div className="label"> Conclusion #3 </div>
                    <div className="bigContent"> {reportContent.conclusions[2]} </div>
                    <div className="label"> Conclusion #4 </div>
                    <div className="bigContent"> {reportContent.conclusions[3]} </div>
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
                    <div className="label"> {reportContent.iteration[2]} </div>
                    <div className="bigContent"> {reportContent.iteration[3]} </div>
                    <ul>
                        <li className="bigContent"> <b>{reportContent.iteration[4]}</b> {reportContent.iteration[5]} </li>
                        <li className="bigContent"> <b>{reportContent.iteration[6]}</b> {reportContent.iteration[7]} </li>
                        <li className="bigContent"> <b>{reportContent.iteration[8]}</b></li>
                    </ul>
                    <img src="/report/Figma-Board.png" alt="figma" width="100%" height="auto" />
                    <div className="label"> {reportContent.iteration[9]} </div>
                    <div className="bigContent"> {reportContent.iteration[10]} </div>
                    <div className="bigQuote"> "{reportContent.iteration[11]}" </div>
                </div>

                {/* Deep Dive #1 */}
                <div className="deepDive">
                    <div className="header2"> Treatment Categories Visualization </div>
                    <div className="bigContent"> {reportContent.visualization[0]} </div>
                    <div className="bigContent"> {reportContent.visualization[1]} </div>
                    <div className="bigContent"> {reportContent.visualization[2]} </div>
                    <div className="bigContent"> {reportContent.visualization[3]} </div>
                    <div className="bigContent"> {reportContent.visualization[4]} </div>
                    <div className="bigContent"> {reportContent.visualization[5]} </div>
                    <div className="bigContent"> {reportContent.visualization[6]} </div>
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
                    <div className="bigQuote"> {reportContent.testing[1]} </div>
                    <img src="/report/research-screenshots-2.png" alt="report" width="1000px" height="auto" />
                    <div className="bigContent"> {reportContent.testing[2]} </div>
                </div>

                {/* Deep Dive #2 */}
                <div className="deepDive">
                    <div className="header2"> Treatment Options Discoverability </div>
                    <div className="bigContent"> {reportContent.deepDive2[0]} </div>
                    <div className="bigContent"> {reportContent.deepDive2[1]} </div>
                    <img src="/report/Bad-Cards.png" alt="bad" width="100%" height="auto" />
                    <div className="bigContent"> {reportContent.deepDive2[2]} </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "48px", alignItems: "center"}}>
                        <div style={{padding: "10px 16px", borderRadius: "100px", backgroundColor: "#C2004D", outline: "2px solid #FB94BD", color: "white"}}>
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