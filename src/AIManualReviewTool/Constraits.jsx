import BulletPoint from "../library/BulletPoint.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Constraints(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">
                
                {/* Header */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Constraints"
                        title="Minimizing spend, maximizing impact"
                    />
                    <div className="content"> Designing a complex internal tool could easily turn into a time suck. We used it every day so we were constantly reminded of its limitations. But we couldn’t let it become our number one priority.</div>
                </div>

                {/* Constraint #1 */}
                <div className="subSection alignLeft">
                    <div className="h3"> Limited time to spend on internal tools </div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="Our main focus in these two years was launching the Yerbba Report. Only a team of four, we couldn’t let internal tool development take over."
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I used short sprints of iteration to make consistent improvements without drawing too much focus."
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I cut down time spent on aesthetics, design system, onboarding, hi-fi wireframes, and prototyping. Things that didn’t matter as much for an internal tool."
                    />
                </div>

                {/* Constraint #2 */}
                <div className="subSection alignLeft">
                    <div className="h3"> Designing for an evolving reviewer journey </div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="We were constantly discovering new needs for the reviewing process, requiring new features and flows."
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I placed high value on maintainability of both the design tools and the codebase so that it was easy to pick up and put down."
                    />
                </div>

                {/* Constraint #3 */}
                <div className="subSection alignLeft">
                    <div className="h3"> Designing for unknown reviewers </div>
                    <BulletPoint
                        image="/utility/constraint.png"
                        text="During development, our CEO was the only reviewer. But we hoped to have more reviewers in the future, who wouldn’t have the same intuitive feel for how our internal systems work."
                        error={true}
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I used my designs to create a mental model of how the underlying structure works."
                    />
                    <BulletPoint
                        image="/utility/workaround.png"
                        text="I safeguarded against critical errors by carefully disabling select actions if certain conditions weren’t met."
                    />
                </div>

            </div>
        </div>
    )
}

export default Constraints