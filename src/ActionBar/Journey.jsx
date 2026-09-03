import Timeline from "../library/Timeline"
import Origin from "./Origin"
import Concept from "./Concept"
import Testing from "./Testing"
import Noticeable from "./Noticeable"
import Context from "./Context"
import Friction from "./Friction"

function Journey(props) {
    const steps = [
        { id: "origin", label: "Pivoting from the ask", content: <Origin /> },
        { id: "concept", label: "Borrowing a sandbox idea", content: <Concept /> },
        { id: "testing", label: "Testing on underwriters", content: <Testing /> },
        { id: "noticeable", label: "Making previous result noticeable", content: <Noticeable /> },
        { id: "context", label: "Giving the right context", content: <Context /> },
        { id: "friction", label: "Adding friction for switching investors", content: <Friction /> },
    ]

    return <Timeline steps={steps} />
}

export default Journey
