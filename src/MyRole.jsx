import "./MyRole.css"

function MyRole(props) {
    const {ux, frontEnd, backEnd} = props

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "40px"}}>
            <div style={{fontSize: "32px", lineHeight: "32px", fontWeight: "bold"}}> My Role </div>
            {ux ? 
            <div className="row">
                <img src="/ux.png" alt="icon" height="24px" width="24px"/>
                <div> Design the User Experience </div>
            </div> : null}
            {frontEnd ? 
            <div className="row">
                <img src="/front_end.png" alt="icon" height="24px" width="24px"/>
                <div> Implement the Front-End </div>
            </div> : null}
            {backEnd ? 
            <div className="row">
                <img src="/back_end.png" alt="icon" height="24px" width="24px"/>
                <div> Implement the Back-End </div>
            </div> : null}
        </div>
    )
}

export default MyRole