import { useRef, useState, useEffect, useLayoutEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import "./ScrollScene.css"

const MOBILE_BREAKPOINT = 768
const VH_PER_SLIDE = 90

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

// How far down each card rests once it's fully arrived, relative to card 0
// — a small fixed stagger so the stack is visibly fanned once settled,
// rather than every card landing in the exact same spot.
const STACK_REST_OFFSET_PX = 16

// Card 0 never moves — it's already in place, pinned in the viewport. Every
// later card starts fully below the viewport and slides up to cover
// whatever's behind it as scroll passes through its own 1/count-wide
// segment, then holds a little lower than the card before it (rather than
// flush at 0) for the rest of the scroll — so its top edge keeps peeking
// out above the card that lands on top of it next. Scrolling back up runs
// the same function in reverse, sliding it back down and off, unstacking
// the deck one card at a time.
//
// Uses useTransform's function form (not the array-interpolation form) —
// the array form was found to keep extrapolating past a slide's own range
// instead of clamping there, which caused an earlier bug.
function getCardY(index, count) {
    const restOffset = index * STACK_REST_OFFSET_PX
    if (index === 0) return () => `${restOffset}px`
    const segment = 1 / count
    const segStart = index * segment
    const segEnd = segStart + segment
    return (t) => {
        if (t <= segStart) return "100%"
        if (t >= segEnd) return `${restOffset}px`
        const local = (t - segStart) / (segEnd - segStart)
        // Blends from "100%" (one full card-height below, off screen) down
        // to the exact rest offset in px — calc() lets the two different
        // units (% of own height, fixed px) interpolate together.
        return `calc(${100 * (1 - local)}% + ${restOffset * local}px)`
    }
}

function Slide({ scrollYProgress, index, count, children, cardRef, cardHeight }) {
    const y = useTransform(scrollYProgress, getCardY(index, count))

    return (
        <motion.div className="stackSlide" style={{ y, zIndex: index + 1 }}>
            <div className="stackCard" ref={cardRef} style={cardHeight ? { height: cardHeight } : undefined}>
                {children}
            </div>
        </motion.div>
    )
}

function ScrollScene({ slides }) {
    const containerRef = useRef(null)
    const firstCardRef = useRef(null)
    const [cardHeight, setCardHeight] = useState(null)
    const isMobile = useIsMobile(MOBILE_BREAKPOINT)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Every other card matches the first card's actual rendered height
    // (rather than a hardcoded value), so it stays correct if slide 1's
    // content ever changes and re-measures on resize (its image is sized
    // in vh, so its height isn't fixed across viewport sizes).
    useLayoutEffect(() => {
        if (isMobile || !firstCardRef.current) return
        const el = firstCardRef.current
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0]
            if (!entry) return
            // contentRect excludes padding, but .stackCard is border-box —
            // read the border-box size so the height we copy to the other
            // cards matches what firstCardRef actually occupies on screen.
            const borderBox = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize
            const height = borderBox ? borderBox.blockSize : entry.contentRect.height
            if (height) setCardHeight(height)
        })
        observer.observe(el, { box: "border-box" })
        return () => observer.disconnect()
    }, [isMobile])

    if (isMobile) {
        return (
            <div className="scrollSceneMobile">
                {slides.map((slide, i) => (
                    <div className="scrollSceneMobileSlide" key={i}>
                        {slide}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div
            className="stackSceneOuter"
            ref={containerRef}
            style={{ height: `${slides.length * VH_PER_SLIDE}vh` }}
        >
            <div className="stackScenePin">
                {slides.map((slide, i) => (
                    <Slide
                        key={i}
                        scrollYProgress={scrollYProgress}
                        index={i}
                        count={slides.length}
                        cardRef={i === 0 ? firstCardRef : undefined}
                        cardHeight={i === 0 ? undefined : cardHeight}
                    >
                        {slide}
                    </Slide>
                ))}
            </div>
        </div>
    )
}

export default ScrollScene
