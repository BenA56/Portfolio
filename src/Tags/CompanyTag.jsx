import React from "react"

function CompanyTag(props) {
    const {company} = props
    console.log(company)
    return (
        <div>
            <React.Fragment>
                {company === "Yerbba" ?
                    <div style={{display: "flex", padding: "10px 15px", backgroundColor: "#C2004D", color: "white", borderRadius: "50px"}}>
                        Yerbba
                    </div>
                :
                    <div style={{display: "flex", padding: "10px 15px", backgroundColor: "#F26B0B", color: "white", borderRadius: "50px"}}>
                        ShotQuality
                    </div>
                }
            </React.Fragment>
        </div>

    )
}

export default CompanyTag