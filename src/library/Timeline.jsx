import { useEffect, useRef, useState } from "react"
import TimelineSidebar from "./TimelineSidebar"
import "./Timeline.css"

function Timeline(props) {
    const { groups, steps, sidebarFooter } = props
    const timelineGroups = groups || [{ label: null, steps: steps || [] }]
    const allSteps = timelineGroups.flatMap((group) => group.steps)
    const [activeId, setActiveId] = useState(allSteps[0]?.id)
    const contentRef = useRef(null)

    function scrollToStep(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Only promote a step when it enters the band — never clear on exit,
                    // so the sidebar holds the last step through the gaps between them.
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            // A thin band across the upper-middle of the viewport. Steps vary wildly in
            // height, so "whichever step is crossing this line" beats any ratio-based rule.
            { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
        )

        const els = contentRef.current?.querySelectorAll(":scope > .timelineStep")
        els?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [groups, steps])

    return (
        <div className="sectionOuter">
            <div className="timelineLayout">
                <TimelineSidebar groups={timelineGroups} activeId={activeId} onStepClick={scrollToStep} footer={sidebarFooter} />
                <div className="timelineContent" ref={contentRef}>
                    {timelineGroups.flatMap((group) => (
                        group.steps.map((step, stepIndex) => (
                            <div key={step.id} id={step.id} className="timelineStep">
                                {group.label && stepIndex === 0 && (
                                    <div className="timelineGroupHeading l1">{group.label}</div>
                                )}
                                {step.content}
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline
