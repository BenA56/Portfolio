import React from "react"
import { Link } from "react-router-dom";
import "./NavBar.css"

const tabs = [
    "Summary", "Breast Cancer Report", "AI Manual Review Tool", "EHR Signup", // "Shot Doctor Cards"
]

function Tab(props) {
    const {selected, name} = props

    return (
        <div>
            {selected ?
                <div className="tab selected">
                    {name}
                </div>
            :
                <div>
                    <Link className="tab" to={`/` + name.split(" ").join("")}> {name} </Link>
                </div>
            }
        </div>
    )
}

function NavBar(props) {
    const {selectedTab} = props

    return (
        <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", marginTop: "60px", position: "sticky", top: "0px", zIndex: "1000", backgroundColor: "white", borderBottom: "2px solid black", padding: "16px 0px 16px 190px"}}>
            <div className='me' style={{fontSize: "24px"}}> Ben Arteaga | </div>
            {tabs.map(tabName => {
                return (
                    <Tab name={tabName} selected={selectedTab === tabName} />
                )
            })}
        </div>
    )
}

export default NavBar