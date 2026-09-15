import StaggerScene from "../library/StaggerScene.jsx"
import SectionHeader from "../library/SectionHeader.jsx"

function Problem(props) {
    const photo = (
        <>
            <img className="imgStyle" src="/aus/UWM-Floor.webp" alt="UWM underwriting floor" width="100%" height="auto" />
            <div className="overlayTag l1">You work here</div>
        </>
    )

    const cards = [
        <>
            <div className="staggerCardHeadline">You need an eligible AUS result to close each loan.</div>
            <div className="content">AUS ensures the loan can be sold to Fannie Mae or Freddie Mac.</div>
        </>,
        <>
            <div className="staggerCardHeadline">You run AUS at least several times on each loan.</div>
            <div className="content">Anytime you change something on the loan — for example removing an income source — you may want to run AUS to make sure the loan is still good.</div>
        </>,
        <>
            <div className="staggerCardHeadline">But you have to leave your flow to run it.</div>
            <div className="content">You either have to navigate away to a separate page in the new system or keep a separate tab open with the same loan on the old system (most underwriters were doing the latter).</div>
        </>,
    ]

    const insight = (
        <>
            <div className="staggerInsightLabel">
                <img src="/utility/key.png" alt="" width="20px" height="auto" />
                <div className="l1">Insight</div>
            </div>
            <div className="b1">But what if you could run AUS transparently?</div>
        </>
    )

    return (
        <div className="sectionOuter light">
            <div className="subSection">
                <SectionHeader
                    center
                    label="Problem"
                    title="Imagine you're a mortgage underwriter at UWM."
                />
                <div className="scrollSceneSubtext center">Responsible for the validity of 10–15 mortgage loans a day.</div>
            </div>

            <StaggerScene photo={photo} cards={cards} insight={insight} />
        </div>
    )
}

export default Problem
