function Warning(props) {
    const {title, icon, desc1, desc2, desc3} = props

    return (
        <div style={{display: "flex", flexDirection: "column", border: "solid 1px black", padding: "20px", borderRadius: "20px", gap: "20px", maxWidth: "567px"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "10px", alignItems: "center"}}>
                <img src={icon} width="24px" height="24px" />
                <div className="subHeader"> {title} </div>
            </div>
            <div className="bigContent"> {desc1} </div>
            {desc2 ? 
                <div className="bigContent"> {desc2} </div>
            : null}
            {desc3 ? 
                <div className="bigContent"> {desc3} </div>
            : null}
        </div>
    )
}

export default Warning