import { useRef, useState, useEffect, useLayoutEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion"
import "./StaggerScene.css"

const MOBILE_BREAKPOINT = 768
const STEPS = 4
const VH_PER_STEP = 70
const RISE_PX = 48

function useIsMobile(breakpoint) {
    const query = `(max-width: ${breakpoint}px)`
    const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches)

    useEffect(() => {
        const mql = window.matchMedia(query)
        const handleChange = (e) => setIsMobile(e.matches)
        mql.addEventListener("change", handleChange)
        return () => mql.removeEventListener("change", handleChange)
    }, [query])

    return isMobile
}

// Tracks the highest value `source` has ever reached. Transforms driven off
// it can only move forward, so scrolling back up never un-reveals a card.
function useRatchet(source) {
    const ratchet = useMotionValue(source.get())
    useMotionValueEvent(source, "change", (latest) => {
        if (latest > ratchet.get()) ratchet.set(latest)
    })
    return ratchet
}

// Each item owns its own 1/count-wide slice of the scene's scroll range, so
// the user has to keep scrolling for the next card to rise into its slot
// beside the ones already there.
function getRevealStyle(index, count) {
    const segment = 1 / count
    const segStart = index * segment
    const segEnd = segStart + segment

    const y = (t) => {
        if (t <= segStart) return `${RISE_PX}px`
        if (t >= segEnd) return "0px"
        const local = (t - segStart) / (segEnd - segStart)
        return `${RISE_PX * (1 - local)}px`
    }

    const opacity = (t) => {
        if (t <= segStart) return 0
        if (t >= segEnd) return 1
        return (t - segStart) / (segEnd - segStart)
    }

    return { y, opacity }
}

function RevealItem({ index, count, progress, className, children }) {
    const { y: yFn, opacity: opacityFn } = getRevealStyle(index, count)
    const y = useTransform(progress, yFn)
    const opacity = useTransform(progress, opacityFn)

    return (
        <motion.div className={className} style={{ y, opacity }}>
            {children}
        </motion.div>
    )
}

function StaggerScene({ photo, cards, insight }) {
    const containerRef = useRef(null)
    const contentRef = useRef(null)
    const releaseInfo = useRef(null)
    const isMobile = useIsMobile(MOBILE_BREAKPOINT)

    // Once every card has landed there's nothing left to animate, so the scene
    // drops its pin and its extra scroll height and becomes an ordinary block.
    // Without this, leaving the section upward means scrolling back through
    // ~180vh of page that doesn't move.
    const [released, setReleased] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })
    const progress = useRatchet(scrollYProgress)

    useMotionValueEvent(progress, "change", (latest) => {
        if (latest < 0.999 || released) return
        // Record where the content sits on screen while the pin is still up,
        // so the swap can put it back in exactly the same place.
        if (contentRef.current) {
            releaseInfo.current = { viewportTop: contentRef.current.getBoundingClientRect().top }
        }
        setReleased(true)
    })

    // Dropping the spacer and the pin's padding moves the content up the page,
    // so scroll by the same amount — on screen it doesn't move at all.
    useLayoutEffect(() => {
        if (!released || !releaseInfo.current || !contentRef.current) return
        const docTop = contentRef.current.getBoundingClientRect().top + window.scrollY
        window.scrollTo(0, Math.round(docTop - releaseInfo.current.viewportTop))
    }, [released])

    const animated = !isMobile && !released

    return (
        <div
            className={animated ? "staggerSceneOuter" : "staggerSceneOuter staggerSceneReleased"}
            ref={containerRef}
            style={animated ? { height: `${STEPS * VH_PER_STEP}vh` } : undefined}
        >
            <div className="staggerScenePin">
                <div className="staggerScene" ref={contentRef}>
                    <div className="staggerSceneMain">
                        <div className="staggerPhotoWrap imgOverlayWrap">{photo}</div>
                        <div className="staggerCardColumn">
                            {cards.map((card, i) =>
                                animated ? (
                                    <RevealItem key={i} index={i} count={STEPS} progress={progress} className="staggerSmallCard">
                                        {card}
                                    </RevealItem>
                                ) : (
                                    <div className="staggerSmallCard" key={i}>{card}</div>
                                )
                            )}
                        </div>
                    </div>
                    {animated ? (
                        <RevealItem index={3} count={STEPS} progress={progress} className="staggerInsight">
                            {insight}
                        </RevealItem>
                    ) : (
                        <div className="staggerInsight">{insight}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StaggerScene
