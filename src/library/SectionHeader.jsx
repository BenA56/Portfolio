import React from "react"
import "./SectionHeader"
import "../App.css"

function SectionHeader(props) {
    const { center, light, label, title } = props

    const layoutStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: center ? "center" : "flex-start",
        gap: "24px",
        marginBottom: "24px"
    }

    const labelStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        alignItems: center ? "center" : "flex-start"
    }

    return (
        <div style={layoutStyle}>
            <div style={labelStyle}>
                <div className="l1"> {label} </div>
                <img src="/utility/underline.svg" alt="underline" width="auto" height="auto" />
            </div>
            <div className="h2"> {title} </div>
        </div>
    )
}

export default SectionHeader