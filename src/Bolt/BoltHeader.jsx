import React from "react"
import "./BoltHeader.css";


function BoltHeader(props) {
    const {} = props

    return (
        <div className="boltHeader">
            <div className="b2"> 2024 - Present | @ United Wholesale Mortgage </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "8px"}}>
                <div className="h1"> UX Improvements on <b>Bolt</b></div>
                <div className="b1"> to help underwriters close thousands of loans per day </div>
            </div>
        </div>
    )
}

export default BoltHeader