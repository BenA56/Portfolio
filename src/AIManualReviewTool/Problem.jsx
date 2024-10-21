import SectionHeader from "../library/SectionHeader.jsx"
import "./Problem.css"

function Problem(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="The Problem"
                        title="Building the behind-the-scenes"
                        center={true}
                    />
                    <div className="content center"> While we hoped that our AI would eventually be good enough to trust its results, early versions were prone to errors due to inconsistencies in medical records and the uniqueness of each user. We needed a solution for manually reviewing the results of the AI, both for brand-new reports and updated reports. </div>
                </div>

                {/* Flows */}
                <img className="webFlows" src="/manReview/Web-Report-Flows.svg" alt="flows" width="auto" height="auto" />
                <div className="mobileFlows">
                    <div className="subSection">
                        <div className="h3">How a Yerbba Report gets approved for a new user</div>
                        <img src="/manReview/Mobile-Report-New.svg" alt="mobile" width="auto" height="auto" />
                    </div>
                    <div className="subSection">
                        <div className="h3">How a Yerbba Report gets updated for an existing user</div>
                        <img src="/manReview/Mobile-Report-Update.svg" alt="mobile" width="auto" height="auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Problem