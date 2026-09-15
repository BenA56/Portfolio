import { useRef, useState } from "react"
import "./FinalScreenshots.css"
import SectionHeader from "../library/SectionHeader"

function ArrowIcon(props) {
    return (
        <svg width="10" height="16" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5173 11.2809L4.01998 19.7783C3.43266 20.3656 2.48296 20.3656 1.90189 19.7783L0.489832 18.3662C-0.0974846 17.7789 -0.0974846 16.8292 0.489832 16.2481L6.5067 10.2187L0.483583 4.19563C-0.103733 3.60832 -0.103733 2.65861 0.483583 2.07754L1.89564 0.659236C2.48296 0.07192 3.43266 0.07192 4.01373 0.659236L12.5111 9.15658C13.1046 9.7439 13.1046 10.6936 12.5173 11.2809Z" fill="currentColor"/>
        </svg>
    )
}

const SCREENSHOTS = [
    {
        id: "run-anywhere",
        src: "/aus/Document-Associations-Run-AUS.png",
        alt: "Run AUS modal open within Document Associations",
        header: "Run AUS From Anywhere",
        label: "AUS can now be run from anywhere in Bolt via the blue bar fixed to the bottom of the screen",
    },
    {
        id: "previous-run",
        src: "/aus/Run-AUS-Modal-Detail.png",
        alt: "Run AUS modal detail view",
        header: "Surface the Previous Run",
        label: "It's very important for underwriters to see the result of the previous run if they're considering running AUS again",
    },
    {
        id: "switch-warning",
        src: "/aus/AUS-Last-Run-Warning.png",
        alt: "Run AUS modal showing a warning that the last AUS run was DU",
        header: "Warn Before Switching Agencies",
        label: "Underwriters wanted friction when switching agencies because it might cause them to rework part of the loan",
    },
    {
        id: "loading-state",
        src: "/aus/AUS-Loading.png",
        alt: "Run AUS modal showing DU run in progress",
        header: "An Obvious Loading State",
        label: "AUS runs could take anywhere from 10 seconds to two minutes so they need an obvious loading state so that underwriters don't forget they have a process running",
    },
    {
        id: "run-history",
        src: "/aus/AUS-History-Full.png",
        alt: "AUS run history panel, full screen view",
        header: "A Scannable Run History",
        label: "It's important for underwriters to be able to scan the \"Recommendation\" column because they may want to investigate what happened to make a loan go from ineligible to eligible",
    },
    {
        id: "reference-numbers",
        src: "/aus/AUS-Finish.png",
        alt: "AUS run complete screen with DU results and reference figures",
        header: "Reference Numbers at a Glance",
        label: "The reference numbers were a feature that I pushed for because I noticed that the first thing underwriters do when they open the findings is make sure that those key values match what we have in our system, but there was no easy place to reference them in Bolt",
    },
]

function FinalScreenshots(props) {
    const [activeId, setActiveId] = useState(SCREENSHOTS[0].id)
    const activeShot = SCREENSHOTS.find((shot) => shot.id === activeId) || SCREENSHOTS[0]
    const thumbsRef = useRef(null)

    function scrollThumbs(direction) {
        const strip = thumbsRef.current
        if (!strip) return
        strip.scrollBy({ left: direction * strip.clientWidth * 0.8, behavior: "smooth" })
    }

    return (
        <div id="final-product" className="sectionOuter finalScreenshotsSection">
            <SectionHeader
                label="Final Product"
                title="Final Production Screenshots"
                center={true}
            />

            <div className="carouselLayout">
                <div className="carouselThumbRow">
                    <button
                        type="button"
                        className="carouselArrow carouselArrow--prev"
                        onClick={() => scrollThumbs(-1)}
                        aria-label="Scroll thumbnails left"
                    >
                        <ArrowIcon />
                    </button>

                    <div className="carouselThumbs" ref={thumbsRef}>
                        {SCREENSHOTS.map((shot) => (
                            <button
                                key={shot.id}
                                type="button"
                                className={`carouselThumb${shot.id === activeId ? " selected" : ""}`}
                                onClick={() => setActiveId(shot.id)}
                                aria-label={shot.alt}
                                aria-current={shot.id === activeId}
                            >
                                <img src={shot.src} alt="" />
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="carouselArrow carouselArrow--next"
                        onClick={() => scrollThumbs(1)}
                        aria-label="Scroll thumbnails right"
                    >
                        <ArrowIcon />
                    </button>
                </div>

                <div className="carouselStep">
                    <div className="carouselStage">
                        <img className="imgStyle" src={activeShot.src} alt={activeShot.alt} />
                    </div>
                    <div className="carouselCaption">
                        <div className="h3">{activeShot.header}</div>
                        <div className="imgLabel">{activeShot.label}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalScreenshots
