import Timeline from "../library/Timeline"
import Origin from "./Origin"
import Concept from "./Concept"
import Testing from "./Testing"
import Improvements from "./Improvements"

function Journey(props) {
    const steps = [
        { id: "origin", label: "Origin", content: <Origin /> },
        { id: "concept", label: "Concept", content: <Concept /> },
        { id: "testing", label: "Testing", content: <Testing /> },
        { id: "improvements", label: "Improvements", content: <Improvements /> },
    ]

    return <Timeline steps={steps} />
}

export default Journey
