import SectionHeader from "../library/SectionHeader.jsx"

function Noticeable(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="Improvements"
                    title="Making Previous Result More Noticeable"
                />
            </div>

            <div className="subSection alignLeft">
                <div className="l1">Problem</div>
                <div className="h3">When I asked underwriters to “find your most recent AUS result”, they struggled.</div>
                <div className="content">
                    One of two things happened. One, they went to the history page and looked for the top row, completely negating the value of having the previous run on the Run page. This makes sense for their current mental model as in the legacy system, they had to go to the history page to see the previous run. Or two, they found it on the run page but only after searching hard. No one just noticed it immediately without prompting.
                </div>
                <img className="imgStyle" src="/aus/New-Run-Modal-Previous-Run.png" alt="New Run modal with the previous run tucked in the bottom corner" width="100%" height="auto" />
                <div className="imageLayout">
                    <img className="imgStyle" src="/aus/Prev-Run-Highlight.png" alt="New Run modal annotated with the F-scan pattern over the previous run" width="100%" height="auto" />
                    <div className="imgLabel">The previous run was not in their natural scanning pattern</div>
                </div>
            </div>

            <div className="subSection alignLeft">
                <div className="l1">Why It Matters</div>
                <div className="h3">While AUS history can be useful, the most recent run is usually what matters most.</div>
                <div className="content">
                    Not only does the most recent run tell you if the loan can be sold to investors on the secondary market, but it also tells you whether or not you need to run AUS again. Therefore, seeing the most recent result (and viewing the external link to open the findings) should feel super easy to access.
                </div>
            </div>

            <div className="subSection alignLeft">
                <div className="l1">Solution</div>
                <div className="h3">Putting the most recent run in the F-scan focal point.</div>
                <div className="content">
                    Since I wasn’t going to have a chance to test it again, I needed to be certain that I was putting the most recent run in a place that would be noticed. I figured the best way to do this would be to put the most recent run in the focal point of the typical F-scan pattern, somewhere near the top left of the popover.
                </div>
                <img className="imgStyle" src="/aus/Run-AUS-Previous-Result-Focal.png" alt="Run AUS modal with previous result at the top of the sidebar" width="100%" height="auto" />
                <div className="imageLayout">
                    <img className="imgStyle" src="/aus/Prev-Run-In-Scan.png" alt="Run AUS modal annotated showing previous result inside the F-scan pattern" width="100%" height="auto" />
                    <div className="imgLabel">I made certain previous result would be noticeable by putting it directly in the focal point of the classic F-scan pattern</div>
                </div>
            </div>
        </div>
    )
}

export default Noticeable
