import { useEffect, useRef, useState } from "react"
import TimelineSidebar from "./TimelineSidebar"
import "./Timeline.css"

function Timeline(props) {
    const { steps } = props
    const [activeId, setActiveId] = useState(steps[0]?.id)
    const contentRef = useRef(null)

    function scrollToStep(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { threshold: 0.1 }
        )

        const els = contentRef.current?.querySelectorAll("[id]")
        els?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [steps])

    return (
        <div className="sectionOuter">
            <div className="timelineLayout">
                <TimelineSidebar steps={steps} activeId={activeId} onStepClick={scrollToStep} />
                <div className="timelineContent" ref={contentRef}>
                    {steps.map((step) => (
                        <div key={step.id} id={step.id} className="timelineStep">
                            {step.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline
