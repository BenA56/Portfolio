import React, {useState} from "react"
import "./DesignDetail.css"

function DesignDetail(props) {
    const {image1, image2} = props
    const [reveal, setReveal] = useState(false)

    function revealDetail() {
        setReveal(true)
    }

    function hideDetail() {
        setReveal(false)
    }
    
    return (
        <div className="detail-image-wrapper">
            <div className="hover-signifier">
                <img src="/playbook/hover.png" alt="hover" width="16px" height="16px" />
                <div>Hover to Reveal</div>
            </div>
            <img src={image1} alt="ghost" className="ghost-image" />
            <img onMouseEnter={revealDetail} src={image1} alt="context" width="100%" height="auto" className={"detail-image"}/>
            <img onMouseLeave={hideDetail} src={image2} alt="context" width="100%" height="auto" className={"detail-image " + (!reveal ? "hide" : "")}/>
        </div>
    )
}

export default DesignDetail