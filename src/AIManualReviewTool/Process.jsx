import SectionHeader from "../library/SectionHeader.jsx"
import "./Process.css"

function Process(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection">
                    <SectionHeader
                        label="The Process"
                        title="We were the users"
                        center={true}
                    />
                    <div className="content center">The process was pretty simple. After the initial version, my CEO would use the Manual Review Tool to review and approve breast cancer reports. Over time, issues with the tool would naturally rise to the surface, kick-starting a round of improvements. We repeated this cycle several times in two years, in between sprints on the consumer-facing Yerbba Report.</div>
                </div>

                {/* Diagram */}
                <img className="webProcess" src="/manReview/Process.svg" alt="process" width="auto" height="auto" />
                <img className="mobileProcess"  src="/manReview/Process-Mobile.svg" alt="process" width="auto" height="auto" />

            </div>
        </div>
    )
}

export default Process