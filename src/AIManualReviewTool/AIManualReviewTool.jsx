import CaseStudyHeader from "../CaseStudyHeader"
import MyRole from "../MyRole"
import NavBar from "../NavBar"

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
                <MyRole ux={true} frontEnd={true} backEnd={true}/>
            </div>
        </div>
    )
}

export default AIManualReviewTool