import SectionHeader from "../library/SectionHeader.jsx"

function Testing(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="User Testing"
                    title="How I convinced my stakeholder to let me do user testing"
                />
                <div className="content">
                    User testing was very much not a part of the culture at Bolt when I started. The UX team at UWM had made some attempts prior to my tenure to do user research, but the Bolt team always felt like they were being slowed down. And if there was one thing that was not allowed on the Bolt product teams managing the product used to underwrite thousands of loans every day … it was slow them down.
                </div>
                <div className="content">
                    So what I proposed was simple: I knew my Product Owner, Logan, was presenting to the business stakeholders at the end of the week. I asked him if I could run a one week where I would not only test on 5 underwriters but also make design improvements by the end of the week. That way, there was nothing to lose and no reason to say no.
                </div>
                <div className="content">
                    So I made a quick prototype and designed a two part test. First, I would ask each underwriter to show me how they currently run AUS and observe them using it in their current workflows. Then I would have them use the new prototype and see how they feel.
                </div>
                <div className="content">
                    I did the tests, recording my notes on a Miro board and then grouping the notes into themes. I presented these findings to Logan before making the design updates to make sure that his thoughts as the product owner were being incorporated as well.
                </div>
            </div>
            <div className="imagePairRow">
                <div className="imageLayout">
                    <img className="imgStyle" src="/aus/Testing-Miro-Board.png" alt="Miro board with testing notes grouped into themes" />
                    <div className="imgLabel">I took notes on each individual test, then grouped the notes into themes, which turned into a list of design improvements</div>
                </div>
                <div className="imageLayout">
                    <img className="imgStyle" src="/aus/Testing-Design-Adjustments.png" alt="List of design adjustments from testing" />
                </div>
            </div>
        </div>
    )
}

export default Testing
