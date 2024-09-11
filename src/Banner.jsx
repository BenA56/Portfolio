function Banner(props) {
    const {title, desc, role, img, backgroundColor, accentColor, textColor} = props

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "80px 200px", backgroundColor: backgroundColor, color: textColor, marginBottom: "85px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "24px", maxWidth: "435px"}}>
                <div className="header"> {title} </div>
                <div className="bigContent"> {desc} </div>
                <div className="bigContent" style={{fontWeight: "bold", color: accentColor}}> {role} </div>
            </div>
            <img src={img} alt="screen" height="200px" width="auto" style={{outline: `4px solid ${accentColor}`, borderRadius: "8px"}}/>
        </div>
    )
}

export default Banner