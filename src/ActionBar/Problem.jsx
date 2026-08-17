import SectionHeader from "../library/SectionHeader.jsx"

function Problem(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">
                <div className="subSection">
                    <SectionHeader
                        label="Problem"
                        title="Imagine you're an underwriter at UWM responsible for ensuring the validity of 10-15 mortgage loans per day."
                        center={true}
                    />
                </div>
            </div>

            <div className="sectionInner">
                <div className="imageLayout">
                    <div className="imgOverlayWrap">
                        <img className="imgStyle" src="/aus/UWM-Floor.webp" alt="UWM underwriting floor" width="100%" height="auto" />
                        <div className="overlayTag l1">You work here</div>
                    </div>
                    <div className="imgLabel">An actual photo of the underwriting floor at UWM</div>
                </div>
            </div>

            <div className="threeColLayout">
                <div className="threeColItem">
                    <div className="h3">Your goal ...</div>
                    <div className="content">
                        ... is to make sure that income, assets, and liabilities are properly documented with ratios that satisfy requirements set by the federally backed companies of Freddie Mac and Freddie Mae.
                    </div>
                </div>
                <div className="threeColItem">
                    <div className="h3">In order to do this ...</div>
                    <div className="content">
                        ... you run AUS (automated underwriting system) many times on each loan to make sure that you're on the right path. An eligible result means that UWM can sell that loan to Fannie or Freddie on the secondary market.
                    </div>
                </div>
                <div className="threeColItem">
                    <div className="h3">The problem is ...</div>
                    <div className="content">
                        ... in order to run AUS you have to either navigate away from your current page in Bolt and go to the final review page, or keep your current page open and use a different window to run it in our legacy underwriting tool (Edge).
                    </div>
                </div>
            </div>

            <div className="sectionInner">
                <div className="subSection">
                    <div className="h3 center" style={{fontSize: "32px", lineHeight: "40px"}}>But what if ...</div>
                    <div className="content center" style={{fontSize: "26px", lineHeight: "36px"}}>
                        ... you could access and run AUS wherever you are in your loan, without the friction of navigating away to another page or going back to the legacy system?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Problem
