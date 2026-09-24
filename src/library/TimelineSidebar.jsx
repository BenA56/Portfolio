import { useLayoutEffect, useRef, useState } from "react"
import "./Timeline.css"

// Just enough to clear the fixed header pills (Back/CaseStudySwitcher/Profile),
// which bottom out around 95px, so the sidebar can use as much of the
// remaining viewport height as possible.
const MIN_TOP = 88

function TimelineSidebar(props) {
    const { groups, activeId, onStepClick, footer } = props
    const sidebarRef = useRef(null)
    const [top, setTop] = useState(MIN_TOP)

    useLayoutEffect(() => {
        function recalc() {
            const height = sidebarRef.current?.offsetHeight || 0
            // Center the nav in the viewport, but never let it start above
            // MIN_TOP — that's the fixed header's clearance line.
            setTop(Math.max(MIN_TOP, (window.innerHeight - height) / 2))
        }

        recalc()
        window.addEventListener("resize", recalc)
        return () => window.removeEventListener("resize", recalc)
    }, [groups, footer])

    return (
        <div className="timelineSidebar" ref={sidebarRef} style={{ top: `${top}px` }}>
            <div className="timelineTrack">
                {groups.map((group, groupIndex) => (
                    <div key={group.label || groupIndex} className="timelineGroup">
                        {group.label && <div className="timelineGroupLabel">{group.label}</div>}

                        <div className="timelineGroupSteps">
                            {group.steps.map((step) => {
                                const active = step.id === activeId

                                return (
                                    <button
                                        key={step.id}
                                        type="button"
                                        className={`timelineEvent${active ? " active" : ""}`}
                                        onClick={() => onStepClick(step.id)}
                                    >
                                        <span className="timelineDot" />
                                        <span className="timelineLabel">{step.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {footer && <div className="timelineSidebarFooter">{footer}</div>}
        </div>
    )
}

export default TimelineSidebar
