function Company(props) {
    const {name, content, logo, current} = props

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
            <img src={logo} alt="Yerbba" width="32px" height="32px" />
            <div style={{width: "150px", display: "flex", flexDirection: "row", padding: "20px", gap: "10px"}}>
                <div style={{fontSize: "24px"}}> {name} </div>
                {current ?
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "5px"}}>
                        <div style={{height: "12px", width: "12px", borderRadius: "40px", backgroundColor: "#C92364"}}></div>
                        <div style={{color: "#C92364"}}> Current </div>
                    </div>
                : null}
            </div>
            <img src="/next.png" alt="forward_arrow" width="24px" height="24px" />
            <div style={{padding: "0px 20px"}}> {content} </div>
        </div>
    )
}


function Companies(props) {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <Company name="Yerbba" content="AI-generated breast cancer reports" logo="/Yerbba.png" current={true}/>
            <Company name="ShotQuality" content="Basketball analytics for college coaches" logo="/ShotQuality.png"/>
            <Company name="Filos" content="Fantasy sports meets investing" logo="/question_mark.png"/>
        </div>
    );
}

export default Companies;