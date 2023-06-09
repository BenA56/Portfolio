import CaseStudyHeader from "../CaseStudyHeader"
import MyRole from "../MyRole"
import NavBar from "../NavBar"
import CaseStudy from "../CaseStudy"

const content = {
    background: "In order to guarantee accuracy, each breast cancer report generated by our AI must be manually reviewed before the user can see it.",
    reqs: [
        ["See status of all documents for each user", "The reviewer needs to know which documents for a given user still need to be reviewed. This calls their attention to the work that needs to be done in order for the user to get their report."],
        ["Review and edit each variable", "The reviewer needs to be able to inspect and edit each variable that is generated by the AI, in case the AI has made errors or there are irregularities in the patient’s medical records."],
        ["See code used", "For some variables, the reviewer needs to be able to see the chunk of code that was used in the backend to generate that variable."],
        ["Push to different environments", "The reviewer needs to be able to push changes to a testing environment where they can see what the user’s report would look like as well as a production environment so that the user can see their report."]
    ],
    keys: [
        ["No Prototyping *gasp*", "Since this was an internal tool and speed was of the essence (we were struggling to get users their reports), it made more sense to go rapidly from sketches straight to coding.", "This was an interesting test of my design instincts and sharpened my ability to make quick decisions."],
        ["Stakeholder Grilling", "I frequently found myself applying my user interview skills to my own boss. Since he is not a designer, he was not aware of what kind of information I would need in order to make the tool hum.", "I learned to elicit the flows of the reviewer and investigate the root causes of feature requests to make sure that we were building the right thing."]
    ]
}

function AIManualReviewTool(props) {
    return (
        <div className="App">
            <NavBar selectedTab="AI Manual Review Tool"/>
            <div className="caseStudyContent">
                <CaseStudyHeader
                    logo="/artificial-intelligence.png"
                    name="AI Manual Review Tool"
                    desc="Building a tool for reviewing and editing AI-generated breast cancer reports"
                    type="full"
                    company="Yerbba"
                />
                <div className="section">
                    <div className="header2"> Background </div>
                    <div className="bigContent"> {content.background} </div>
                </div>
                <MyRole ux={true} frontEnd={true} backEnd={true}/>
                <div className="section">
                    <div className="header2"> Important Requirements </div>
                    {content.reqs.map(req => {
                        return (
                            <div className="subSection">
                                <div className="subHeader"> {req[0]} </div>
                                <div className="bigContent"> {req[1]} </div>
                            </div>
                        )
                    })}
                </div>
                <div className="section">
                    <div className="header2"> Keys to Success </div>
                    {content.keys.map(key => {
                        return (
                            <div className="subSection">
                                <div className="subHeader"> {key[0]} </div>
                                <div className="bigContent"> {key[1]} </div>
                                {key[2] ? <div className="bigContent"> {key[2]} </div> : null}
                            </div>
                        )
                    })}
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "40px"}}>
                    <div className="header2"> Other Case Studies </div>
                    <div className="caseStudies">
                        <CaseStudy name="Report Redesign" desc="Re-imagining a breast cancer report for better discoverability of key information" logo="/report.png" type="NDA" company="Yerbba"/>
                        <CaseStudy name="Sign Up Redesign" desc="Increasing the likelihood that a user will connect to their electronic health records" logo="/signup.png" type="full" company="Yerbba"/>
                        <CaseStudy name="Shot Doctor Card Redesign" desc="Displaying statistical comparisons in a way that helps coaches take action" logo="/analytics.png" type="full" company="ShotQuality"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIManualReviewTool