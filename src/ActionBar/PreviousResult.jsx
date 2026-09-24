import SectionHeader from "../library/SectionHeader.jsx"

function PreviousResult(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Previous Result"
                    title="Making Previous Result Easier to Access"
                />
                <div className="content">
                    Whenever I’m designing something, I like to ask the question of “how does the user know if they have to take that action in the first place?”. Or in this case, “how does the underwriter know if they need to run AUS?”
                </div>
                <div className="content">
                    Well, they would probably look at the previous result.
                </div>
                <div className="content">
                    The problem, in the legacy system they would have to navigate all the way to the “Request History” tab and look at the top row of the table. Then if they determine they need to run AUS, they would have to navigate back to the tab where they run it.
                </div>
                <div className="content">
                    There’s no reason they shouldn’t be able to see the previous result in the same view that they take the action of running AUS.
                </div>
            </div>

            <div className="compareRow compareColumn">
                <div className="compareItem">
                    <img className="imgStyle" src="/aus/Old-AUS-Form.png" alt="The AUS form in the legacy system, Edge" width="100%" height="auto" />
                </div>
                <img className="compareArrow" src="/utility/Arrow-Right.svg" alt="then" width="24px" height="24px" />
                <div className="compareItem">
                    <img className="imgStyle" src="/aus/Prev-Result-History-Highlight.png" alt="The Request History tab in Edge with the top row highlighted" width="100%" height="auto" />
                </div>
            </div>

            <div className="subSection alignLeft">
                <div className="content">
                    In my first attempt to add Previous Result to the Run AUS view, I aligned it in the same row as the “Run AUS” button, since I figured that the underwriter would want to see it before they decide to Run AUS.
                </div>
            </div>

            <img className="imgStyle" src="/aus/Prev-Result-Highlight.png" alt="The New Run modal with Previous Run in the same row as the Run DU button" width="100%" height="auto" />

            <div className="subSection alignLeft">
                <div className="content">
                    However, when I tested this screen on underwriters, the previous result seemed to be in a blind spot.
                </div>
                <div className="content">
                    When I would ask them to “find the most recent AUS result”, they would still go to the history tab and look at the top row, not even noticing the “Previous Result” component on the run screen.
                </div>
                <div className="content">
                    Since I was swimming upstream against their current habit, I would have to put the Previous Result in a more noticeable place.
                </div>
                <div className="content">
                    So I decided to put it in a sure-fire place that they would notice: right in the focal point of the typical F-scan pattern. Not only would this be nice for seeing the previous result right away, but it made sure that the link to open the findings would be discoverable, since that is a very common action taken by underwriters.
                </div>
            </div>

            <img className="imgStyle" src="/aus/Prev-Result-Good.png" alt="The Run AUS modal with Previous Result at the top left, in the focal point of the F-scan pattern" width="100%" height="auto" />

            <div className="subSection alignLeft">
                <div className="content">
                    By putting previous result in the Run AUS screen and making sure it’s in a noticeable spot, I reduced the amount of bouncing around the underwriter has to do even more.
                </div>
            </div>
        </div>
    )
}

export default PreviousResult
