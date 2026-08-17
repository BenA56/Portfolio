import SectionHeader from "../library/SectionHeader.jsx"

function Concept(props) {
    return (
        <div className="sectionOuter">
            <div className="sectionInner">
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="How I came up with the Concept"
                        title="Extending a Sandbox Idea from a Senior Designer"
                    />
                    <div className="content">
                        I had a feeling from our initial feedback that running AUS should be a globally accessible action. But where to put it? That's when I remembered a concept that Senior Designer Jason Barrons had made in our Sandbox file. It was a fixed bar on the bottom of the screen to house the "Continue" button that underwriters were required to click on every page in order to save their progress and go to the next page.
                    </div>
                    <div className="content">
                        The problem with the current Continue button was that it was on the bottom of every page, so underwriters did a lot of unnecessary scrolling just to save their work and get to the next page. But what if we extended out the Action Bar to house other globally accessible actions like AUS?
                    </div>
                </div>
                <div className="imageSection">
                    <img className="imgStyle" src="/aus/Action-Bar.png" alt="action bar" width="100%" height="auto" />
                </div>
            </div>
        </div>
    )
}

export default Concept
