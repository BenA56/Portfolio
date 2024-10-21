import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"
import "./VersionControl.css"

function VersionControl(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="Discovery #2"
                        title="We needed a version control system for medical records"
                        center={true}
                    />
                    <div className="content center">When a user’s medical records change, their report is re-generated from scratch, leaving the reviewer wondering - “What’s changed? Where should I focus my attention?”</div>
                </div>

                <div className="comparison">
                    <div className="compItem">
                        <div className="imageLayout">
                            <img className="imgStyle" src="/manReview/AI-Version-Picker.png" alt="picker" width="100%" height="auto" />
                            <div className="imgLabel">First, the user selects a previous version of the report</div>
                        </div>
                    </div>
                    <div className="compItem">
                        <div className="imageLayout">
                            <img className="imgStyle" src="/Manual-Review.png" alt="picker" width="100%" height="auto" />
                            <div className="imgLabel">The results from the previous version are layered on top</div>
                        </div>
                    </div>
                </div>

                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3">Diffs are signaled up the tree</div>
                        <div className="content center">Collapsability was important for the reviewer to get an overview of the documents within a report. So parent objects needed to signal if one of their children has differences of not</div>
                    </div>
                    <img src="manReview/Diff-Tree.svg" alt="tree" width="100%" height="auto" />
                </div>

                <div className="imageSection">
                    <div className="subSection">
                        <div className="h3">Time moves from left to right</div>
                        <div className="content center">In the western world, we think of time moving from left to right. So I placed old values from the older version of the report on the left while new values from the current version of the report went on the right.</div>
                    </div>
                    <div className="timeLayout">
                        <div className="old"> old_value </div>
                        <div className="line"></div>
                        <div className="new"> new_value </div>
                    </div>
                </div>

                <div className="subSection">
                    <div className="h3">Version control improves efficiency</div>
                    <BulletPoint
                        image="/utility/way.png"
                        text="It directs the reviewers attention like a trail of crumbs, when they are reviewing an updated version of a report"
                    />
                    <BulletPoint
                        image="/utility/delete-user.png"
                        text="Reviewer can ignore all documents and variables marked with “no changes”"
                    />
                    <BulletPoint
                        image="/utility/sync.png"
                        text="If the AI makes the same mistake it made in the past when re-generating the report, the reviewer can see the previous manual override and apply it to the current version, so they don’t have to figure it out again"
                    />
                </div>

            </div>
        </div>
    )
}

export default VersionControl