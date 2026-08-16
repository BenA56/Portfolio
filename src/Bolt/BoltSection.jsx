import React from "react"
import "./BoltSection.css";
import BoltHeader from "./BoltHeader";
import HotspotImage from "./HotSpot";


function BoltSection(props) {
    const {} = props

    return (
        <div className="boltSection">
            <BoltHeader />
            <HotspotImage src="/bolt/Bolt.png"/>
        </div>
    )
}

export default BoltSection