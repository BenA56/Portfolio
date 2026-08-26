import ScrollScene from "../library/ScrollScene.jsx"

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
            <div className="scrollSceneHeadline">Your goal: get every loan investor-ready.</div>
            <div className="scrollSceneSubtext">Income, assets, and liabilities — all properly documented to satisfy Freddie Mac and Fannie Mae.</div>
        </>,

        <>
            <div className="scrollSceneHeadline">So you run AUS. Again and again.</div>
            <div className="scrollSceneSubtext">The Automated Underwriting System check that says you're on the right path.</div>
        </>,

        <>
            <div className="scrollSceneHeadline">But running AUS means leaving your page.</div>
            <div className="scrollSceneSubtext">Navigate away in Bolt, or juggle a second window in the legacy tool, Edge.</div>
        </>,

        <>
            <div className="scrollSceneHeadline">What if you never had to leave?</div>
            <div className="scrollSceneSubtext">Run AUS from anywhere in the loan — no friction, no legacy system.</div>
        </>,
    ]

    return (
        <div className="sectionOuter light">
            <ScrollScene slides={slides} />
        </div>
    )
}

export default Problem
