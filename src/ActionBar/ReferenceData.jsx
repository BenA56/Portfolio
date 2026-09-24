import SectionHeader from "../library/SectionHeader.jsx"

function ReferenceData(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Reference Data"
                    title="Providing the Right Reference Data"
                />
                <div className="content">
                    When I was observing the underwriters run AUS in the legacy system, I asked a very important question:
                </div>
                <div className="h3">
                    “What is the first thing you’re looking for when you open the actual AUS findings?”
                </div>
                <div className="content">
                    Turns out, all of the underwriters are instructed to first check for some key data points and compare them to the same data points in our system. Differences in these data points are often where issues with the loan stem from so it’s important that they match up.
                </div>
                <div className="content">
                    But I realized something critical.
                </div>
                <div className="content">
                    The newer underwriting system, Bolt, did not have an easily accessible way to see things like DTI and HTI that the underwriter would be looking to compare to the value in the AUS findings. As a result, they would most likely look back at the legacy system Edge, which has those values displayed in an ever-present side bar.
                </div>
                <div className="content">
                    If I released a feature that drove underwriters to look back at the legacy product, then I would be going against the entire purpose of the project: to get out of the legacy product! Not to mention, causing the underwriter to do even more bouncing back and forth between two different screens, a dynamic we were trying to decrease not increase.
                </div>
                <div className="content">
                    So I came up with a simple solution.
                </div>
                <div className="content">
                    Why not just display the numbers that underwriters are checking the findings for directly below the button they click to open the findings? This would not only give them a convenient place to find the data points, but their mere presence would also remind underwriters to look for them in the first place, helping to ensure that any discrepancies are caught early.
                </div>
            </div>

            <img className="imgStyle" src="/aus/Ref-Numbers-Highlight.png" alt="The run complete screen with a For reference panel showing DTI, HTI, LTV, and Credit Score below the findings buttons" width="100%" height="auto" />
        </div>
    )
}

export default ReferenceData
