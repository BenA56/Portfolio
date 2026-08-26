import "./Timeline.css"

function TimelineSidebar(props) {
    const { steps, activeId, onStepClick } = props

    return (
        <div className="timelineSidebar">
            <div className="timelineTrack">
                {steps.map((step) => {
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
    )
}

export default TimelineSidebar
