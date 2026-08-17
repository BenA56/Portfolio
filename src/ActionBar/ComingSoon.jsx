import "./ComingSoon.css"
import BulletPoint from "../library/BulletPoint"
import Countdown from "./Countdown"

function ComingSoon(props) {
    return (
        <div className="sectionOuter">
            <div className="comingSoonCard">
                <div className="comingSoonIntro">
                    <div className="h2"> Full Case Study Coming Soon </div>
                    <Countdown />
                </div>
                <div className="comingSoonList">
                    <BulletPoint image="/utility/check.png" text="How I pivoted a misguided redesign to create this project" />
                    <BulletPoint image="/utility/check.png" text="How I collaborated with a Senior Designer to find AUS a home" />
                    <BulletPoint image="/utility/check.png" text="How I convinced my Product Owner to do rapid usability testing" />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
