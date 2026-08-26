import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion"
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

// Each slide fades in over the tail of the previous slide's segment and fades
// out over the head of the next slide's segment, so transitions line up into
// one continuous crossfade with no dead (fully transparent) scroll range.
function getCrossfadeRange(index, count) {
    const segment = 1 / count
    const segStart = index * segment
    const segEnd = segStart + segment
    const fade = segment * 0.1

    if (count === 1) {
        return { range: [0, 1], opacity: [1, 1], y: [0, 0] }
    }
    if (index === 0) {
        return {
            range: [0, segEnd - fade, segEnd + fade],
            opacity: [1, 1, 0],
            y: [0, 0, -32],
        }
    }
    if (index === count - 1) {
        return {
            range: [segStart - fade, segStart + fade, 1],
            opacity: [0, 1, 1],
            y: [32, 0, 0],
        }
    }
    return {
        range: [segStart - fade, segStart + fade, segEnd - fade, segEnd + fade],
        opacity: [0, 1, 1, 0],
        y: [32, 0, 0, -32],
    }
}

function Slide({ scrollYProgress, index, count, children, once }) {
    const { range, opacity: opacityOutput, y: yOutput } = getCrossfadeRange(index, count)
    const scrubOpacity = useTransform(scrollYProgress, range, opacityOutput)
    const y = useTransform(scrollYProgress, range, yOutput)

    // `once` slides (the intro line) fade out normally on the way past, but
    // never come back — even if the user scrolls back up over them.
    const latchedOpacity = useMotionValue(scrubOpacity.get())
    useMotionValueEvent(scrubOpacity, "change", (latest) => {
        if (latest < latchedOpacity.get()) {
            latchedOpacity.set(latest)
        }
    })

    return (
        <motion.div className="scrollSceneSlide" style={{ opacity: once ? latchedOpacity : scrubOpacity, y }}>
            {children}
        </motion.div>
    )
}

function ScrollScene({ slides }) {
    const containerRef = useRef(null)
    const isMobile = useIsMobile(MOBILE_BREAKPOINT)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

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
            className="scrollSceneOuter"
            ref={containerRef}
            style={{ height: `${slides.length * VH_PER_SLIDE}vh` }}
        >
            <div className="scrollScenePin">
                {slides.map((slide, i) => (
                    <Slide key={i} scrollYProgress={scrollYProgress} index={i} count={slides.length} once={i === 0}>
                        {slide}
                    </Slide>
                ))}
            </div>
        </div>
    )
}

export default ScrollScene
