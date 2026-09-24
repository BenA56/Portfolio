import SectionHeader from "../library/SectionHeader.jsx"

function Pivot(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="The Pivot"
                    title="The Final Review Page Didn’t Make Sense as a Permanent Home for AUS"
                />
                <div className="content">
                    As a mini design team on Bolt, our philosophy was not merely to “shift” but to “shift and lift”. As we moved features from Edge to Bolt, we didn’t just want to move stuff around, we wanted to make it a better user experience in the process.
                </div>
                <div className="content">
                    But we were also new to the product team.
                </div>
                <div className="content">
                    We needed to build trust. And the best way to do that was to complete the initial ask as fast as possible, proving our reliability and helpfulness while leaving room for iteration on the back end.
                </div>
                <div className="content">
                    So in just a couple of days I designed the best final review page I could, cramming in all of the requested features, and getting it ready to present to stakeholders.
                </div>
                <div className="imageLayout">
                    <img className="imgStyle" src="/aus/Initial-Final-Review-Page.png" alt="Initial final review page design with full AUS functionality" width="100%" height="auto" />
                    <div className="imgLabel">Initial final review page design with full AUS functionality</div>
                </div>
                <div className="content">
                    But when the Product owner and I presented to them, the concept wasn’t hitting.
                </div>
                <div className="content">
                    Luckily for us, almost all of our stakeholders had underwriting experience. And it wasn’t making sense to them that AUS should be on the final review page, because AUS is something that they may want to run many times throughout the life of their loan. Not just when they’re ready to close it out.
                </div>
                <div className="content">
                    As a designer, this had my alarm bells going off. The system didn’t match the model of how people actually used AUS. If I could figure out a way to make it easy to run AUS at any point in the loan process, with as little friction as possible, it might be a major improvement to the underwriter workflow …
                </div>
                <div className="content">
                    … but where to put it? That’s when I recalled a sandbox idea from senior designer Jason Barrons that might give me the home I needed.
                </div>
            </div>
        </div>
    )
}

export default Pivot
