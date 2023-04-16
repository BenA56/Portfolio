import NavBar from "../NavBar"
import MyRole from "../MyRole"
import CaseStudyHeader from "../CaseStudyHeader"

function ShotDoctorCardRedesign(props) {
    return (
        <div className="App">
            <NavBar selectedTab="Shot Doctor Card Redesign"/>
            <div className="caseStudyContent">
                <CaseStudyHeader
                    logo="/analytics.png"
                    name="Shot Doctor Card Redesign"
                    desc="Displaying statistical comparisons in a way that helps coaches take action"
                    type="full"
                    company="ShotQuality"
                />
                <MyRole ux={true}/>
            </div>
        </div>
    )
}

export default ShotDoctorCardRedesign