import ScrollScene from "../library/ScrollScene.jsx"
import ImagePlaceholder from "../library/ImagePlaceholder.jsx"
import BulletPoint from "../library/BulletPoint.jsx"

function Problem(props) {
    const slides = [
        <>
            <div className="scrollSceneEyebrow">
                <div className="l1">Problem</div>
                <img src="/utility/underline.svg" alt="" width="auto" height="auto" />
            </div>
            <div className="scrollSceneHeadline">Imagine you're an underwriter at UWM.</div>
            <div className="scrollSceneSubtext">Responsible for the validity of 10–15 mortgage loans a day.</div>
            <div className="scrollSceneImageWrap imgOverlayWrap">
                <img className="imgStyle" src="/aus/UWM-Floor.webp" alt="UWM underwriting floor" width="100%" height="auto" />
                <div className="overlayTag l1">You work here</div>
            </div>
        </>,

        <>
            <div className="scrollSceneHeadline">You bounce back and forth between the legacy and new system to hit your daily commitment of 10 loans per day.</div>
            <div className="stackTwoCol">
                <div className="stackTwoColItem">
                    <img className="imgStyle" src="/bolt/Bolt.png" alt="Bolt" width="100%" height="auto" />
                    <div className="l1">Bolt — the new system</div>
                </div>
                <div className="stackTwoColItem">
                    <ImagePlaceholder label="Edge screenshot placeholder" />
                    <div className="l1">Edge — the legacy system</div>
                </div>
            </div>
        </>,

        <>
            <div className="scrollSceneHeadline">AUS is your golden ticket to hitting your daily commitment.</div>
            <div className="bulletList">
                <BulletPoint image="/utility/check.png" text="Placeholder — thing AUS checks for #1" />
                <BulletPoint image="/utility/check.png" text="Placeholder — thing AUS checks for #2" />
                <BulletPoint image="/utility/check.png" text="Placeholder — thing AUS checks for #3" />
                <BulletPoint image="/utility/check.png" text="Placeholder — thing AUS checks for #4" />
            </div>
        </>,

        <>
            <div className="scrollSceneHeadline">You re-run AUS any time you make a change to your loan.</div>
            <div className="stackActionList">
                <div className="stackActionRow">
                    <div className="content">Placeholder action #1</div>
                    <div className="stackTag l1">Re-run AUS</div>
                </div>
                <div className="stackActionRow">
                    <div className="content">Placeholder action #2</div>
                    <div className="stackTag l1">Re-run AUS</div>
                </div>
                <div className="stackActionRow">
                    <div className="content">Placeholder action #3</div>
                    <div className="stackTag l1">Re-run AUS</div>
                </div>
            </div>
        </>,

        <>
            <div className="scrollSceneHeadline">But if you're working a loan in Bolt, you most likely go back to Edge to run AUS.</div>
        </>,

        <>
            <div className="scrollSceneHeadline">What if you could run AUS directly in the new system without having to leave your workflow?</div>
        </>,
    ]

    return (
        <div className="sectionOuter light">
            <ScrollScene slides={slides} />
        </div>
    )
}

export default Problem
