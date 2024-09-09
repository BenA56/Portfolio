import NavBar from "../NavBar"
import MyRole from "../MyRole"
import CaseStudyHeader from "../CaseStudyHeader"
import Warning from "../Warning"
import CaseStudies from "../CaseStudies"

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

            {/* Header */}
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "80px 200px", backgroundColor: "#282738", color: "white", marginBottom: "85px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "24px", maxWidth: "435px"}}>
                    <div className="header"> The Yerbba Report </div>
                    <div className="bigContent"> Creating a personalized breast cancer report to help patients take ownership of their treatment journey </div>
                </div>
                <div style={{width: "200px", height: "200px", backgroundColor: "#808080"}}> image </div>
            </div>

            <div className="App">
            <div className="caseStudyContent">
                {/* <CaseStudyHeader
                    logo="/report.png"
                    name="The Yerbba Report"
                    desc="Creating a personalized breast cancer report to help patients take ownership of their treatment journey"
                    company="Yerbba"
                /> */}

                <div className="section">
                    <div className="header2"> The Opportunity </div>
                    <div className="bigContent"> {content.background} </div>
                </div>
                <MyRole ux={true} frontEnd={true}/>
                <div className="section">
                    <div className="header2"> Problems with the Original </div>
                    <div className="subSection">
                        <div className="subHeader"> Poor Discoverability </div>
                        <div className="bigContent"> {content.problemsWithOriginal[0]} </div>
                    </div>
                    <div className="subSection">
                        <div className="subHeader"> Cold Visual Design </div>
                        <div className="bigContent"> {content.problemsWithOriginal[1]} </div>
                    </div>
                    <div className="subSection">
                        <div className="subHeader"> High-Friction Navigation </div>
                        <div className="bigContent"> {content.problemsWithOriginal[2]} </div>
                    </div>
                </div>
                <div className="section">
                    <div className="header2"> 9 Problems I've solved so far </div>
                    {content.problemsSolved.map((problem, index) => {
                        return (
                            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "10px"}}>
                                <div className="subHeader"> {index + 1 + "."} </div>
                                <div className="bigContent"> {problem} </div>
                            </div>
                        )
                    })}
                </div>
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