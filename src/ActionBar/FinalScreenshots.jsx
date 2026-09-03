import { useEffect, useRef, useState } from "react"
import "./FinalScreenshots.css"
import SectionHeader from "../library/SectionHeader"

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
    const contentRef = useRef(null)
    const ratiosRef = useRef({})

    function scrollToShot(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    ratiosRef.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0
                })

                const [mostVisibleId] = Object.entries(ratiosRef.current).sort((a, b) => b[1] - a[1])[0] || []
                if (mostVisibleId) {
                    setActiveId(mostVisibleId)
                }
            },
            { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
        )

        const els = contentRef.current?.querySelectorAll("[id]")
        els?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="sectionOuter finalScreenshotsSection">
            <SectionHeader
                label="Final Product"
                title="Final Production Screenshots"
                center={true}
            />

            <div className="carouselLayout">
                <div className="carouselThumbs">
                    {SCREENSHOTS.map((shot) => (
                        <button
                            key={shot.id}
                            type="button"
                            className={`carouselThumb${shot.id === activeId ? " selected" : ""}`}
                            onClick={() => scrollToShot(shot.id)}
                            aria-label={shot.alt}
                            aria-current={shot.id === activeId}
                        >
                            <img src={shot.src} alt="" />
                        </button>
                    ))}
                </div>

                <div className="carouselContent" ref={contentRef}>
                    {SCREENSHOTS.map((shot) => (
                        <div key={shot.id} id={shot.id} className="carouselStep">
                            <div className="carouselCaption">
                                <div className="h3">{shot.header}</div>
                                <div className="imgLabel">{shot.label}</div>
                            </div>
                            <img className="imgStyle" src={shot.src} alt={shot.alt} width="100%" height="auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FinalScreenshots
