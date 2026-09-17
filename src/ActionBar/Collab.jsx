import SectionHeader from "../library/SectionHeader.jsx"
import BulletPoint from "../library/BulletPoint.jsx"

function Collab(props) {
    return (
        <div className="sectionInner">
            <div className="subSection alignLeft">
                <SectionHeader
                    label="The Collab"
                    title="Extending a Sandbox Idea from a Senior Designer"
                />
                <div className="content">
                    Senior designer Jason Barrons was no stranger to enterprise interfaces that needed to be efficient to use.
                </div>
                <div className="content">
                    So when he noticed that underwriters, in order to save their work and move on to the next page, had to scroll to the bottom of each page to hit the Continue button, he immediately recognized an opportunity.
                </div>
                <div className="content">
                    That’s why he added the fixed action bar to our sandbox file. The concept was simple: a fixed bar at the bottom of the screen housing the Continue button. This way if the underwriter was making a change at the top of, shall we say, the housing insurance page (a lengthy one indeed), they wouldn’t have to scroll all the way down to the bottom of the page to hit the continue button. It would always be in view.
                </div>
                <div className="content">
                    Plus, Mr. Barrons suspected that there might be other actions that need to be visible at all times.
                </div>
                <div className="content">
                    Having seen this concept in the sandbox, I came to him with an idea: what if we populated his fixed action bar with AUS and a few other things from the final review page, since they were things that may need to be accessed at any time during the underwriting process?
                </div>
                <div className="content">
                    Jason loved it. We sat down together and designed out the underwriting action bar in one afternoon. I still remember that magical feeling of true collaboration.
                </div>
                <img className="imgStyle" src="/aus/Action-Bar-Full.png" alt="The underwriting action bar fixed to the bottom of the Bolt interface" width="100%" height="auto" />
                <div className="content">
                    Although the action bar would undergo many tweaks as we ran it through round after round of stakeholder approval and tested it on underwriters themselves, there were a few key things that stay true:
                </div>
                <div className="bulletList">
                    <BulletPoint
                        image="/utility/check.png"
                        text="Three-tiered hierarchy of actions, grouped by function, and arranged from most frequently taken to least."
                    />
                    <BulletPoint
                        image="/utility/check.png"
                        text="Book-end effect was utilized to make the two most important things (Continue button and AUS) the most noticeable. This was one of the many cognitive tricks I learned from Jason."
                    />
                    <BulletPoint
                        image="/utility/check.png"
                        text="The bar was primary blue to help it stand out against the noisy Bolt interface behind."
                    />
                    <BulletPoint
                        image="/utility/check.png"
                        text="And maybe the most important: the bar NEVER changed width. This guaranteed that underwriters could rely on muscle memory to click the Continue button (if they didn’t use the convenient keyboard shortcuts that we added)"
                    />
                </div>
            </div>
        </div>
    )
}

export default Collab
