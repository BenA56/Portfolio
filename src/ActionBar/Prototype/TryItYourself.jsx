import SectionHeader from "../../library/SectionHeader"
import MockScreen from "./MockScreen"
import "./TryItYourself.css"

function TryItYourself(props) {
    return (
        <div id="try-it-yourself" className="sectionOuter tryItSection">
            <SectionHeader
                label="Try It Yourself"
                title="Run AUS, For Real"
                center={true}
            />
            <div className="tryItIntro">
                Click the <b>AUS</b> button on the blue bar below to open the real popover — switch between DU and LPA,
                type into the credential fields, kick off a run, and check the history. Everything else on the bar is
                just for show.
            </div>

            <div className="tryItFrameOuter">
                <div className="tryItFrame">
                    <MockScreen />
                </div>
            </div>
        </div>
    )
}

export default TryItYourself
