import "./FinalScreenshots.css"
import SectionHeader from "../library/SectionHeader"

function FinalScreenshots(props) {
    return (
        <div className="sectionOuter finalScreenshotsSection">
            <SectionHeader
                label="Final Product"
                title="Final Production Screenshots"
                center={true}
            />
            <div className="bigScreenshot">
                <img className="imgStyle" src="/aus/Document-Associations-Run-AUS.png" alt="Run AUS modal open within Document Associations" width="100%" height="auto" />
                <div className="imgLabel">AUS can now be run from anywhere in Bolt via the blue bar fixed to the bottom of the screen</div>
            </div>

            <div className="comparison">
                <div className="compItem">
                    <img className="imgStyle" src="/aus/Run-AUS-Modal-Detail.png" alt="Run AUS modal detail view" width="100%" height="auto" />
                    <div className="imgLabel">It's very important for underwriters to see the result of the previous run if they're considering running AUS again</div>
                </div>
                <div className="compItem">
                    <img className="imgStyle" src="/aus/AUS-Last-Run-Warning.png" alt="Run AUS modal showing a warning that the last AUS run was DU" width="100%" height="auto" />
                    <div className="imgLabel">Underwriters wanted friction when switching agencies because it might cause them to rework part of the loan</div>
                </div>
                <div className="compItem">
                    <img className="imgStyle" src="/aus/AUS-Loading.png" alt="Run AUS modal showing DU run in progress" width="100%" height="auto" />
                    <div className="imgLabel">AUS runs could take anywhere from 10 seconds to two minutes so they need an obvious loading state so that underwriters don't forget they have a process running</div>
                </div>
                <div className="compItem">
                    <img className="imgStyle" src="/aus/AUS-History-Full.png" alt="AUS run history panel, full screen view" width="100%" height="auto" />
                    <div className="imgLabel">It's important for underwriters to be able to scan the "Recommendation" column because they may want to investigate what happened to make a loan go from ineligible to eligible</div>
                </div>
                <div className="compItem">
                    <img className="imgStyle" src="/aus/AUS-Finish.png" alt="AUS run complete screen with DU results and reference figures" width="100%" height="auto" />
                    <div className="imgLabel">The reference numbers were a feature that I pushed for because I noticed that the first thing underwriters do when they open the findings is make sure that those key values match what we have in our system, but there was no easy place to reference them in Bolt</div>
                </div>
            </div>
        </div>
    )
}

export default FinalScreenshots
